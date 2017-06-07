<template>
    <div class="play">
        <div class="bg" :style="{'backgroundImage':'url('+picUrl+')'}"></div>
        <div class="playmain">
            <div class="playhead">
                <div class="songtitle">
                    <img class="photo" :src="picUrl" alt="">
                    <div class="songtitleinfo">
                        <p class="songname">{{songName}}</p>
                        <p class="singername">{{singer}}</p>
                    </div>
                </div>
                <span class="closebtn" :class="{playbtn:onoff}"
                    @click = 'playMethod'
                ></span>
            </div>
            <div id="lyricwrap">
                <div id="content" :style="{transform:abc}" style="transition: 400ms">
                    <p v-for='item,index in lyric' :class="{'currentLrc':index == currentclass}">{{item.lrc}}</p>
                </div>
            </div>
            <div class="playarea">
                <audio ref="media" :src="playUrl.url" autoplay='true' buffered mozCurrentSampleOffset ></audio>
                <div class="progress">
                    <span class="nowtime">{{currentTimes}}</span>
                    <div class="progress_bar"
                        @touchmove = 'changealready($event)'
                        ref="progressBar"
                    >
                        <span class="already" :style="{width:played}"></span>
                    </div>
                    <span class="endtime">{{musicTime}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
      name: 'playPage',
      data () {
        return {
            id:this.$route.params.id,
            playUrl:{},
            musicImg:{},
            picUrl:'',
            singer:'',
            songName:'',
            lyric:[],
            onoff:true,
            media:{},
            musicTime:'',
            currentTimes:'',
            secondsTime:'',
            played:'',
            currentclass:''
        }
      },
      methods:{
        changealready(e){
            let x = e.changedTouches[0].clientX-this.$refs.progressBar.offsetLeft
            let l = this.$refs.progressBar.offsetWidth
            let changeTime = x/l*this.$refs.media.duration
            if(x/l>1){
                this.onoff = false;
            }
            this.$refs.media.currentTime = changeTime
        },
        playMethod(){
            setTimeout(()=>{
                this.secondsTime = this.$refs.media.currentTime
            },4)
            console.log(this.media.currentTime )
            if(this.media.paused) {
               this.media.play()
               this.onoff = true;
            } else {
                this.media.pause()
                this.onoff = false;
            }
        },
        updateTime(){
            setTimeout(()=>{
                try{
                    this.secondsTime = this.$refs.media.currentTime
                }catch(err){

                }

            },500)
            this.currentTimes = this.tools.getMusicTime(this.$refs.media.currentTime);
            this.played = this.$refs.media.currentTime/this.$refs.media.duration*100+'%';

            this.lyric.forEach((item,index)=>{
                let time = item.time.slice(0,5)
                if( this.currentTimes == time) this.currentclass = index
            })
        }
      },
      watch:{
        'secondsTime':function(){
            this.updateTime()
        }
      },
      computed:{
        abc(){
            if(42*this.currentclass<168){
                return `translate(0px, 0px)`
            }else{
                return `translate(0px, ${-42*this.currentclass+168}px)`
            }

        }
      },
      mounted(){
        let scroll = null;
        this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id='+this.id).then((d)=>{
            this.playUrl = d.data.data[0]
            console.log(this.playUrl)
        })
        this.$http.get('https://api.imjad.cn/cloudmusic/?type=detail&id='+this.id).then((d)=>{
            this.musicImg = d.data
            this.picUrl = d.data.songs[0].al.picUrl
            this.singer = d.data.songs[0].ar[0].name
            this.songName = d.data.songs[0].name
            // console.log(this.musicImg,this.picUrl)
        })
        this.$http.get('https://api.imjad.cn/cloudmusic/?type=lyric&id='+this.id).then((d)=>{
            if(d.data.lrc){
                let arr = d.data.lrc.lyric.replace(/\[/g,')').split(')').map((item,index)=>{
                    let o ={}
                    o.time = item.split(']')[0]
                    o.lrc = item.split(']')[1]
                    return o
                })
                arr.splice(0,1)
                this.lyric = arr
            }else{
                this.lyric = [{time:'',lrc:'本歌曲暂无歌词'}]
            }

            this.$nextTick(()=>{
                scroll.refresh()
              })
        })
        this.$nextTick(() => {
            this.media = this.$refs.media
            this.media.oncanplay = ()=>{
                this.secondsTime = this.$refs.media.currentTime
                this.currentTimes = this.tools.getMusicTime(this.media.currentTime)
                this.musicTime = this.tools.getMusicTime(this.media.duration)
            }
            scroll = new BScroll(document.getElementById('lyricwrap'),{
                startX: 0,
                startY: 0,
                momentum: true,
                click:true
            })
        })
      }
    }
</script>
