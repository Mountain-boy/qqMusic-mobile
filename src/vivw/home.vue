<template>
  <div class="home">
    <coustor-head></coustor-head>
    <coustor-content :child-msg="list"></coustor-content>
    <coustor-foot></coustor-foot>
  </div>
</template>

<script>
import coustorHead from '@/components/head'
import coustorFoot from '@/components/foot'
import loading from '@/components/loading'
import coustorContent from './homecontent'


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
    }
  },
  methods:{
    pasNum (num){
      return Number.parseFloat(num/10000).toFixed(1)+'万'
    }
  },
  mounted(){
    this.$http.get('/api/home').then((d)=>{
      this.list = d.data.data;
    })
  }
}
</script>
