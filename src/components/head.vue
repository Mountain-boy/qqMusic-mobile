<template>
  <div class="head">
    <header class="mod_header">
        <i class="music_logo">QQ音乐</i>
        <a href="javascript:;" class="btn_download">下载APP</a>
    </header>
    <nav class="mod_nav">
        <router-link :to='"/"' data-nav="recom" class="current">推荐</router-link>
        <router-link :to='"toplist"' data-nav="toplist" class="">排行榜</router-link>
        <router-link :to='"search"' data-nav="search" class="">搜索</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {

    }
  }
}
</script>
