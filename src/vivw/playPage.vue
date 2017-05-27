<template>
    <div class="wrap">
        <div class="main_box">
            <div class="slider">
                <div class="slider_item">
                    <div class="flex_box">
                        <div class="song_info">
                            <span class="album_cover js-imgbox"><img class="album_cover__img" src="https://y.gtimg.cn/music/photo_new/T002R150x150M000000CiJBr3ces2O.jpg?max_age=2592000" onerror="M.imgerror()"></span>
                            <div class="song_info__flex">
                                <h1 class="song_name"><span class="song_name__text" id="songname" style="transition: none; transform: translate(0px);">开始懂了 (Live)</span></h1>
                                <p class="singer_name"><span class="singer_name__text" id="singername">孙燕姿</span></p>
                            </div>

                            <a class="icon_play js-play icon_play--pause" href="javascript:;"></a>
                        </div>
                        <div class="flex_item">
                            <div class="lyric" id="lyric">
                                <div class="lyric__box" id="lyric_txt" style="overflow: hidden;">
                                    <div class="lyric__text" id="lyricDiv" style="transition: -webkit-transform 0.3s ease-out; transform-origin: 0px 0px 0px; transform: translate3d(0px, -504px, 0px);"><p id="line_0">开始懂了 (Live) - 孙燕姿</p><p id="line_1">词：姚若龙</p><p id="line_2" class="">曲：李偲菘</p><p id="line_3" class="">我竟然没有调头</p><p id="line_4" class="">最残忍那一刻</p><p id="line_5" class="">静静看你走</p><p id="line_6" class="">一点都不像我</p><p id="line_7" class="">原来人会变得温柔</p><p id="line_8" class="">是透澈的懂了</p><p id="line_9" class="">爱情是流动的</p><p id="line_10" class="">不由人的</p><p id="line_11" class="">何必激动着要理由</p><p id="line_12" class="">相信你只是怕伤害我</p><p id="line_13" class="">不是骗我</p><p id="line_14" class="lyric__item--current">很爱过谁会舍得</p><p id="line_15">把我的梦摇醒了</p><p id="line_16">宣布幸福不会来了</p><p id="line_17">用心酸微笑去原谅了</p><p id="line_18">也翻越了</p><p id="line_19">有昨天还是好的</p><p id="line_20">但明天是自己的</p><p id="line_21">开始懂了</p><p id="line_22">快乐是选择</p><p id="line_23">相信你只是怕伤害我</p><p id="line_24">不是骗我</p><p id="line_25">很爱过谁会舍得</p><p id="line_26">把我的梦摇醒了</p><p id="line_27">宣布幸福不会来了</p><p id="line_28">用心酸微笑去原谅了</p><p id="line_29">也翻越了</p><p id="line_30">有昨天还是好的</p><p id="line_31">但明天是自己的</p><p id="line_32">开始懂了</p><p id="line_33">快乐是选择</p><p>(完)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="control">
            <div class="operate operate--left">
                <a class="operate__item js-playlist" href="javascript:;">
                    <i class="icon_play_list">歌单列表</i>
                </a>
            </div>
            <div class="operate operate--right">
                <a class="operate__item js-like" href="javascript:;">
                    <i class="icon_like">喜欢</i>
                </a>
            </div>
            <div class="progress">
                <!-- 无拖动点 增加progress--no_dot -->
                <div class="progress__bar progress--no_dot">
                    <div class="progress__box">
                        <div class="progress__bg"></div>
                        <div class="progress__load" style="-webkit-transform:translateX(100%);"></div>
                        <div class="progress__play" id="js-progress" style="transform: translateX(16.6563%); transition-duration: 1s;"></div>
                        <div class="progress__play" id="play_on"><span class="progress__dot" style="display:none;" id="btn_pro"></span></div>
                    </div>
                </div>
                <span class="progress__start js-time-start">00:53</span>
                <span class="progress__end js-time-total">05:24</span>
            </div>
        </div>
        <div class="bg blur" id="bg" style="background-image: url(&quot;https://y.gtimg.cn/music/photo_new/T002R150x150M000001wUwND10osKJ.jpg?max_age=2592000&quot;);"></div>
        <div class="bg_mask" style="opacity:0.6;"></div>
        <div class="actionsheet">
        <div class="mod_list_box">
            <h6 class="list_box__tit">播放队列<span class="list_box__count js-playlist-num">(50首)</span></h6>
            <div class="list_box__cont" id="js-playlist-scroll" style="overflow: hidden;">
                <ul class="mod_play_list js-playlist-box" style="transition-property: -webkit-transform; transform-origin: 0px 0px 0px; transition-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1); transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"><li class="" data-index="0"><span class="play_list__song ">七里香 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">周杰伦</span></li><li data-index="1" class=""><span class="play_list__song ">后来 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">刘若英</span></li><li data-index="2" class=""><span class="play_list__song ">开始懂了 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">孙燕姿</span></li><li data-index="3" class="play_list__item--current"><span class="play_list__song ">Viva La Vida (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">Coldplay</span><span class="ani_playing"><b><i></i><i></i><i></i><i></i></b></span></li><li data-index="4"><span class="play_list__song ">Don't Look Back In Anger(Live at Wembley Stadium, 2000)</span><b class="play_list__line">-</b><span class="play_list__singer">Oasis</span></li><li data-index="5"><span class="play_list__song ">倩女幽魂 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">张国荣</span></li><li data-index="6"><span class="play_list__song ">To Be With You (Live At The Roxy, LA, August 30, 1999)</span><b class="play_list__line">-</b><span class="play_list__singer">Mr. Big</span></li><li data-index="7"><span class="play_list__song ">You Raise Me Up (Live At Croke Park)</span><b class="play_list__line">-</b><span class="play_list__singer">Westlife</span></li><li data-index="8"><span class="play_list__song ">开不了口 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">周杰伦</span></li><li data-index="9"><span class="play_list__song ">Speak Now (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">Taylor Swift</span></li><li data-index="10"><span class="play_list__song ">だんご大家族 (团子大家族) (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">茶太</span></li><li data-index="11"><span class="play_list__song ">I'm Yours (Live On Earth Version)</span><b class="play_list__line">-</b><span class="play_list__singer">Jason Mraz</span></li><li data-index="12"><span class="play_list__song ">Love Story (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">Taylor Swift</span></li><li data-index="13"><span class="play_list__song ">他不爱我 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">莫文蔚</span></li><li data-index="14"><span class="play_list__song ">挪威的森林 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">伍佰</span></li><li data-index="15"><span class="play_list__song ">唯一 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">王力宏</span></li><li data-index="16"><span class="play_list__song ">We Are The World (Demo)</span><b class="play_list__line">-</b><span class="play_list__singer">Michael Jackson</span></li><li data-index="17"><span class="play_list__song ">阴天 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">莫文蔚</span></li><li data-index="18"><span class="play_list__song ">Rule the World (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">Take That</span></li><li data-index="19"><span class="play_list__song ">幼稚完 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">林峯</span></li><li data-index="20"><span class="play_list__song ">拥抱 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">张惠妹</span></li><li data-index="21"><span class="play_list__song ">Because Your Live</span><b class="play_list__line">-</b><span class="play_list__singer">Jesse McCartney</span></li><li data-index="22"><span class="play_list__song ">为爱痴狂 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">刘若英</span></li><li data-index="23"><span class="play_list__song ">最长的电影 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">周杰伦</span></li><li data-index="24"><span class="play_list__song ">背对背拥抱 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">林俊杰</span></li><li data-index="25"><span class="play_list__song ">很爱很爱你 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">刘若英</span></li><li data-index="26"><span class="play_list__song ">Hey Jude</span><b class="play_list__line">-</b><span class="play_list__singer">Paul McCartney</span></li><li data-index="27"><span class="play_list__song ">You Raise Me Up (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">Westlife</span></li><li data-index="28"><span class="play_list__song ">有多少爱可以重来 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">迪克牛仔</span></li><li data-index="29"><span class="play_list__song ">Don't Look Back In Anger (Live at Wembley Stadium, 2000)</span><b class="play_list__line">-</b><span class="play_list__singer">Oasis</span></li><li data-index="30"><span class="play_list__song ">君をのせて (伴随着你) (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">日本群星</span></li><li data-index="31"><span class="play_list__song ">Angels (Live At The Forum)</span><b class="play_list__line">-</b><span class="play_list__singer">Robbie Williams</span></li><li data-index="32"><span class="play_list__song ">Boulevard Of Broken Dreams (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">Green Day</span></li><li data-index="33"><span class="play_list__song ">那一年 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">许巍</span></li><li data-index="34"><span class="play_list__song ">Radioactive</span><b class="play_list__line">-</b><span class="play_list__singer">Imagine Dragons</span></li><li data-index="35"><span class="play_list__song ">To Be With You [Live in Tokyo, Japan, February 5, 2002]</span><b class="play_list__line">-</b><span class="play_list__singer">Mr. Big</span></li><li data-index="36"><span class="play_list__song ">风继续吹 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">张国荣</span></li><li data-index="37"><span class="play_list__song ">夜曲 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">周杰伦</span></li><li data-index="38"><span class="play_list__song ">Angels (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">Robbie Williams</span></li><li data-index="39"><span class="play_list__song ">Heal The World</span><b class="play_list__line">-</b><span class="play_list__singer">Michael Jackson</span></li><li data-index="40"><span class="play_list__song ">Everybody Knows I Love You</span><b class="play_list__line">-</b><span class="play_list__singer">Lovebugs</span></li><li data-index="41"><span class="play_list__song ">李白 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">李荣浩</span></li><li data-index="42"><span class="play_list__song ">Stand By Me (Live at Wembley Stadium, 2000)</span><b class="play_list__line">-</b><span class="play_list__singer">Oasis</span></li><li data-index="43"><span class="play_list__song ">浮夸 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">陈奕迅</span></li><li data-index="44"><span class="play_list__song ">We Will Rock You ('Wetten Das' German TV Live Performance, 2004)</span><b class="play_list__line">-</b><span class="play_list__singer">Queen</span></li><li data-index="45"><span class="play_list__song ">思念是一种病 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">纵贯线</span></li><li data-index="46"><span class="play_list__song ">I'm With You (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">Avril Lavigne</span></li><li data-index="47"><span class="play_list__song ">对面女孩看过来 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">任贤齐</span></li><li data-index="48"><span class="play_list__song ">晴天 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">周杰伦</span></li><li data-index="49"><span class="play_list__song ">Knockin’ On Heaven’s Door (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">Guns N' Roses</span></li></ul>
            </div>
            <a class="list_box__close js-close-playlist" href="javascript:;">关闭</a>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
      name: 'head',
      data () {
        return {
          route:this.$route.name
        }
      }
    }
</script>