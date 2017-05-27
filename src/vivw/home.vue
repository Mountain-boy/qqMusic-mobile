<template>
  <div id="wrapper">
    <div id="content">
      <coustor-head></coustor-head>
      <coustor-content :child-msg="list" v-show='!show'></coustor-content>
      <loading v-if='show'></loading>
      <coustor-foot v-if='!show'></coustor-foot>
    </div>
  </div>
</template>

<script>
import coustorHead from '@/components/head'
import coustorFoot from '@/components/foot'
import loading from '@/components/loading'
import coustorContent from './homecontent'


import BScroll from 'better-scroll'
export default {
  name: 'hello',
  components:{
    coustorHead,
    coustorFoot,
    coustorContent,
    loading
  },
  data () {
    return {
      list:{},
      show:false
    }
  },
  methods:{
    pasNum (num){
      return Number.parseFloat(num/10000).toFixed(1)+'万'
    }
  },
  mounted(){
    let scroll = null;
    this.show = true;
    this.$http.get('/api/home').then((d)=>{
      this.list = d.data.data;
      this.show = false;
      console.log(this.list)
      this.$nextTick(()=>{
        scroll.refresh()
      })

    })
    this.$nextTick(() => {
      scroll = new BScroll(document.getElementById('wrapper'), {
        startX: 0,
        startY: 0,
        momentum: true,
        click:true
      })
    })

  }
}
</script>
