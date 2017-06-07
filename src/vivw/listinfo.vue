<template>
    <div id="infopage">
        <div id="content">
            <div class="mod_focus">
                <div class="focus__body" id="header_block">
                    <div class="focus__info">
                        <div class="focus__text">
                            <h1 class="focus__tit c_txt1">
                                <div class="js_marquee" style="float: left; white-space: nowrap; text-overflow: ellipsis;">
                                    <span class="rank_name">{{lTopinfo.ListName}}</span>
                                    <span id="toplist_name"></span>
                                    <span id="toplist_week"></span>
                                </div>
                            </h1>
                            <p class="focus__desc c_txt1"><span class="focus__number" id="toplist_date">{{list.update_time}} 更新</span></p>
                        </div>
                        <a class="focus__play c_ico1 js_playallsong" href="javascript:;">
                        <span class="focus__play_text">播放</span></a>
                    </div>
                </div>
                <div class="focus__bg" :style="{'backgroundImage':'url('+lTopinfo.pic_album+')'}"></div>
                <div class="focus__gradient c_gradient"></div>
            </div>
            <ul class="mod_song_list border_t c_bor1" style='background:#000'>
                <li class="song_list__item js-song"
                    data-songid="202553248" data-songmid="004TEo4m1cwCtf" data-no="0"
                    v-for = 'item,index in list.songlist'
                    @click = 'toPlayPage(item.data.songname)'
                    >
                    <a class="song_list__box" href="javascript:;">
                        <div class="song_list__no">
                            <span class="song_list__no_number c_txt1">{{index+1}}</span>
                            <div class="rank_trend c_txt2">
                                <i class="rank_trend__icon "></i>
                                <span class="rank_trend__number"></span>
                            </div>
                        </div>
                        <div class="song_list__body border_b c_bor1">
                            <h3 class="song_list__tit c_txt1">{{item.data.songname}}</h3>
                            <p class="song_list__desc c_txt2">{{item.data.singer[0].name}} · {{item.data.albumname}}{{item.data.albumdesc? ' · ':''}}{{item.data.albumdesc}}</p>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="mod_prompt" id="empty" style="">
                <img class="mod_prompt__img" width="95" src="//y.gtimg.cn/mediastyle/mobile/project_v5/extra/empty.png?max_age=2592000">
                <h6 class="mod_prompt__tit c_txt1">空空如也</h6>
            </div>
        </div>
    </div>
</template>

<script>

    import BScroll from 'better-scroll'
   export default {
      name: 'listinfo',
      data () {
        return {
            id:this.$route.params.id,
            list:{},
            lTopinfo:{}
        }
      },
      methods:{
        getMusicID(index){
            console.log(index)

        },
        toPlayPage(songname){
          console.log(songname)
          this.$http.get('https://api.imjad.cn/cloudmusic/?type=search&limit=1&s='+songname).then((d)=>{
            console.log(d.data.result.songs[0].id)
            this.id = d.data.result.songs[0].id
            this.$router.push({name:'playPage',params:{id:this.id}})
          })
        }
      },
      mounted(){
        let scroll = null;
        this.$http.get('/api/gotoINfo'+'?topid='+this.id).then((d)=>{
            this.list = d.data;
            this.lTopinfo = d.data.topinfo
            console.log(this.list)
            this.$nextTick(()=>{
                scroll.refresh()
            })

        })
        this.$nextTick(() => {
          scroll = new BScroll(document.getElementById('infopage'), {
            startX: 0,
            startY: 0,
            momentum: true,
            click:true
          })
        })
      }

    }
</script>