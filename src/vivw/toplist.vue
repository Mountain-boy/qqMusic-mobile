<template>
  <div class="toplist">
    <div id="content">
      <coustor-head></coustor-head>
      <loading v-if='show'></loading>
      <toplist-content :child-toplist='list' v-show='!show'></toplist-content>
    </div>
  </div>
</template>

<script>
import coustorHead from '@/components/head'
import loading from '@/components/loading'
import toplistContent from './toplistcontent'

import BScroll from 'better-scroll'
export default {
  name: 'hello',
  components:{
    coustorHead,
    toplistContent,
    loading
  },
  data () {
    return {
      list:[],
      show:false
    }
  },
  mounted(){
    let scroll = null;
    this.show = true;
    this.$http.get('/api/toplist').then((d)=>{
        this.list = JSON.parse(d.data.slice(18,d.data.length-1)).data.topList
        this.show = false;
        this.$nextTick(()=>{
          scroll.refresh()
        })
    })
    this.$nextTick(() => {
      scroll = new BScroll(document.querySelector('.toplist'), {
        startX: 0,
        startY: 0,
        momentum: true,
        click:true
      })
    })
  }
}
</script>
<style>
  .toplist{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
</style>
