<template>
  <div class="search">
    <coustor-head></coustor-head>
    <coustor-search :child-search='list' :child-top12='top12'></coustor-search>
  </div>
</template>

<script>
import coustorHead from '@/components/head'
import coustorSearch from '@/vivw/search'


export default {
  name: 'hello',
  components:{
    coustorHead,
    coustorSearch
  },
  data () {
    return {
      list:{},
      top12:[]
    }
  },
  mounted(){
    this.$http.get('/api/seach').then((d)=>{
      this.list= d.data.data
      this.top12=this.tools.getTop12(this.list.hotkey)

    })
  }
}
</script>
