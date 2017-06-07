<template>
  <div id="search_wrap" class="search_box loaded current_page">
    <div class="mod_search_bar">
        <div class="search_bar_cont">
            <form id="search_form" method="get" action="#" onsubmit="return false">
                <input class="search_input" style="
        -webkit-appearance: textfield;" type="search" placeholder="搜索歌曲、歌单、专辑"
                    v-model = 'searchVal'
                    @focus ='inputClick'
                    @keyup.prevent.13 ='searchData'
                >
                <span class="icon icon_search">搜索</span>
                <span class="icon icon_delete"
                  v-show='searchVal'
                  @click = 'clearVal'
                >删除</span>
            </form>
        </div>
        <div class="search_bar_tip_text"
          v-show='clicked'
          @click='cancelClick'
        >取消</div>
    </div>
    <div class="mod_search_result"
       v-show='!list.song'
    >
      <h3 class="result_tit">热门搜索</h3>
      <div class="result_tags"
          >
          <a :href='childSearch.special_url' class="tag_s tag_hot">{{childSearch.special_key}}</a>
          <a href="javascript:;" class="tag_s" v-for='item,index in childTop12'>{{item.k}}</a>
      </div>
    </div>
    <div id="focus_wrapper">
        <div class="mod_search_record"
          style='display:none'
        >
          <li>
              <a href="javascript:;" class="js_keyword record_main">
                  <span class="icon iocn_clock"></span>
                  <span class="js_keyword record_con">SAF</span>
                  <span class="js_del_record icon icon_close"></span>
              </a>
          </li>
          <p class="record_handle">
              <a href="javascript:;">清除搜索记录</a>
          </p>
        </div>
        <div class="mod_search_content">
          <ul class="search_content" >
            <li
              v-for='item,index in songlist'
              :id='id'
              @click = 'toPlayPage(item.songname)'
            >
                <span class="media cover">
                  <i class="icon"></i>
                </span>
                <h6 class="main_tit">{{item.songname}}</h6>
                <p class="sub_tit">{{item.singer[0].name}}</p>
            </li>
          </ul>
        </div>
        <div class="mod_loading" style="display:none;">
            <i class="loading__icon"></i>
            <span class="loading__text">正在载入更多...</span>
        </div>
    </div>
    <p class="load_complete" style="display:none;">已加载全部</p>
  </div>
</template>

<script>

export default {
  name: 'search',
  props: ['childSearch','childTop12'],
  data () {
    return {
      searchVal :"",
      clicked:false,
      list:{},
      songlist:[],
      id:''
    }
  },
  methods:{
    inputClick(){
      this.clicked = true
    },
    cancelClick(){
      this.searchVal=""
      this.clicked = false
      this.list = {}
      this.songlist=[]
    },
    clearVal(){
      this.searchVal=""
    },
    searchData(){
      this.searchVal.trim();
      if(this.searchVal=='')return;
      this.$http.get('/api/searchMusic'+this.searchVal).then((d)=>{
        this.list = d.data.data
        this.songlist = this.list.song.list
      })
    },
    toPlayPage(songname){
      console.log(songname)
      this.$http.get('https://api.imjad.cn/cloudmusic/?type=search&limit=1&s='+songname).then((d)=>{
        console.log(d.data.result.songs[0].id)
        this.id = d.data.result.songs[0].id
        this.$router.push({name:'playPage',params:{id:this.id}})
      })
    }
  }
}
</script>
