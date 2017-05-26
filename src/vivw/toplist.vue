<template>
  <div class="toplist">
    <coustor-head></coustor-head>
    <toplist-content :child-toplist='list'></toplist-content>
  </div>
</template>

<script>
import coustorHead from '@/components/head'
import loading from '@/components/loading'
import toplistContent from './toplistcontent'

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
    }
  },
  mounted(){
    this.$http.get('/api/toplist').then((d)=>{
        this.list = JSON.parse(d.data.slice(18,d.data.length-1)).data.topList
    })
  }
}
</script>
