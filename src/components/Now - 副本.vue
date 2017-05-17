<template>
<div>
<div class="front-bg">
      <img class="front-image" :src="imgUrl" :autoplay="getImgUrl" alt="">
</div>
<div class="bg-description">
    <a :href="trendProcess">
      <h1>{{trend}}</h1>
      <br/>
      {{trendDescription}}
    </a>
</div>
</div>
</template>

<script>
export default {
  name: 'now',
  data () {
    return {
      active: 0,
      imgUrl: '//abs.twimg.com/b/front_page/v1/JP_ASIA_3.jpg',
      trendDescription: '',
      trend: '',
      trendProcess: '#/index',
      imgList: [
        {'url': '//abs.twimg.com/b/front_page/v1/JP_ASIA_3.jpg', 'trend': '#朝霞駅', 'trendDescription': '現在の朝霞駅。上りホームの先端まで出場列が伸びています。上り列車は最徐行で運転。'
        },
        {'url': '//abs.twimg.com/b/front_page/v1/JP_ASIA_9.jpg', 'trend': '#羽田', 'trendDescription': '今日の羽田→伊丹便、大阪への降下中に現れた虹のリング。太陽を背にした飛行機の周囲に光が拡散され、雲の上で虹のように見える「ブロッケン現象」です。 実際に見て撮影に成功したのは初めてで、夜になった今も興奮が冷めません。'
        },
        {'url': '//abs.twimg.com/b/front_page/v1/JP_ASIA_10.jpg', 'trend': '#流星雨', 'trendDescription': 'ふたご座流星群☆☆彡キターっ＼(^o^)／'
        }
      ]
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  },
  computed: {
    getImgUrl () {
      let _this = this
      _this.imgUrl = _this.imgList[0].url
      _this.trend = _this.imgList[0].trend
      _this.trendDescription = _this.imgList[0].trendDescription
      setInterval(function () {
        let i = Math.floor(Math.random() * 3)
        _this.imgUrl = _this.imgList[i].url
        _this.trend = _this.imgList[i].trend
        _this.trendDescription = _this.imgList[i].trendDescription
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
    .front-bg {
    position: fixed;
    width: 200%;
    height: 200%;
    left: -50%;
    background: #000;
    }

    .front-bg img {
    margin: auto;
    min-width: 50%;
    min-height: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    }

    .bg-description {
       position:absolute;
       width:400px;
       height:200px;
       bottom:50%; 
       left:25%;
       text-align:left;  
       & a{
        color:white;
        text-decoration:underline;
        & h1{
            font-weight:700;
            font-size:50px;
        }
       }
    }
</style>
