<template>
    <div class="play">

    </div>
</template>
<script>
    export default {
      name: 'playPage',
      data () {
        return {
            id:this.$route.params.id,
            songInfo:{}
        }
      },
      mounted(){
        this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id='+this.id).then((d)=>{
            this.songInfo = d.data.data[0]
            console.log(this.songInfo)
        })
      }
    }
</script>