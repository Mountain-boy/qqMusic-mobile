<template>
  <div id="search_wrap" class="search_box loaded current_page">
    <div class="mod_search_bar">
        <div id="input_wrap" class="search_bar_cont">
            <form id="search_form" method="get" action="#" onsubmit="return false">
                <input id="search_input" class="search_input" type="search" autocomplete="off" style="-webkit-appearance: textfield;" autocorrect="off" placeholder="搜索歌曲、歌单、专辑">
                <span class="icon icon_search">搜索</span>
                <span id="del_btn" class="icon icon_delete">删除</span>
            </form>
        </div>
        <div id="cancel_btn" class="search_bar_tip_text" style="">取消</div>
    </div>
    <div id="hot_keys" class="mod_search_result">
      <h3 class="result_tit">热门搜索</h3>
      <div class="result_tags">
          <a :href='childSearch.special_url' class="tag_s tag_hot">{{childSearch.special_key}}</a>
          <a href="javascript:;" class="tag_s" v-for='item,index in childTop12'>{{item.k}}</a>
      </div>
    </div>
    <div id="focus_wrapper" style="display: none;">
        <div id="record_keys" class="mod_search_record">
          <li>
              <a href="javascript:;" class="js_keyword record_main">
                  <span class="icon iocn_clock"></span>
                  <span class="js_keyword record_con">SAF</span>
                  <span class="js_del_record icon icon_close"></span>
              </a>
          </li>
          <p id="record_clear_btn" class="record_handle">
              <a href="javascript:;">清除搜索记录</a>
          </p>
        </div>
        <div id="search_result" class="mod_search_content"></div>
        <div id="loading" class="mod_loading" style="display:none;">
            <i class="loading__icon"></i>
            <span class="loading__text">正在载入更多...</span>
        </div>
    </div>
    <p id="load_complete" class="load_complete" style="display:none;">已加载全部</p>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: ['childSearch','childTop12'],
  data () {
    return {

    }
  }
}
</script>
