<template>
<div>
<div class="front-bg">
      <img class="front-image" :src="imgUrl" alt="">
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
import axios from 'axios'
export default {
  name: 'now',
  data () {
    return {
      active: 0,
      imgUrl: '',
      trendDescription: '',
      trend: '',
      trendProcess: '#/index',
      imgList: []
    }
  },
  created () {
    this.getNowData()
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    },
    getNowData () {
      axios.get('static/data/now.json').then((res) => {
        this.imgList = res.data
        this.getImgUrl()
      })
    },
    getImgUrl () {
      let _this = this
      _this.imgUrl = _this.imgList[0].url
      _this.trend = _this.imgList[0].trend
      _this.trendDescription = _this.imgList[0].trendDescription
      setInterval(() => {
        let i = Math.floor(Math.random() * _this.imgList.length)
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
            font-size:40px;
        }
       }
    }
</style>
