<template>
  <div class="search">
    <coustor-head></coustor-head>
    <loading v-if='show'></loading>
    <coustor-search :child-search='list' :child-top12='top12' v-if='!show'></coustor-search>
  </div>
</template>

<script>
import coustorHead from '@/components/head'
import coustorSearch from '@/vivw/search'

import loading from '@/components/loading'

export default {
  name: 'hello',
  components:{
    coustorHead,
    coustorSearch,
    loading
  },
  data () {
    return {
      list:{},
      top12:[],
      show:false
    }
  },
  mounted(){
    this.show = true
    this.$http.get('/api/seach').then((d)=>{
      this.show = false
      this.list= d.data.data
      this.top12=this.tools.getTop12(this.list.hotkey)

    })
  }
}
</script>
