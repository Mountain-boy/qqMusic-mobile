<template>
  <div class="loading_box">
      <div class="loading mod_loading_musicicon">
          <img src="//y.gtimg.cn/mediastyle/mobile/yqq_v5/img/loading.gif?max_age=2592000">
          <p>页面正在努力加载中<span>...</span></p>
      </div>
      <div class="mod_prompt network">
          <h6>网络出错</h6>
          <p>您的设备网络出错，建议检查后<br>点击屏幕重新尝试。</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {

    }
  }
}
</script>
