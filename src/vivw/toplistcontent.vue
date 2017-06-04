<template>
  <ul class="mod_topic loaded">
    <li class="topic_item"
      v-for='item,index in childToplist'
      @click = 'gotoINfo(item.id)'
      >
        <div class="topic_main">
            <a href="javascript:;" class="topic_media">
                <img :src="item.picUrl">
                <span class="listen_count"><i class="icon icon_listen"></i>{{tools.pasNum(item.listenCount)}}</span>
            </a>
            <div class="topic_info">
                <div class="topic_cont">
                    <h3 class="topic_tit">{{item.topTitle}}</h3>
                    <p v-for='items,indexs in item.songList'>{{indexs+1}}<span class="text_name">{{items.songname}}</span>- {{items.singername}}</p>
                </div>
                <i class="topic_arrow"></i>
            </div>
        </div>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'toplistcontent',
  props: ['childToplist'],
  data () {
    return {
      list:{}
    }
  },
  methods:{
    gotoINfo(id){
        this.$router.push({name:'Listinfo',params:{id:id}})
    }
  }
}
</script>
