<template>
  <div class="headerWrapper">
    <header class="header">
      <div class="container">
        <h1>
          <img
            src="./assets/twitter-logo-white.png"
            alt="element-logo"
            class="nav-logo"> 
        </h1>
        <ul class="nav">
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/now`">今日热点
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/index`">实时处理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/header`">历史分析
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/hello`">知识库
            </router-link>
          </li>
        </ul>
      </div>
    </header>
    <div class="route-panel">
        <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '一个全新的页面从此诞生'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @height: 80px;
  .headerWrapper {
    height: 80px;
  }
  .header {
    height: @height;
    background-color: rgba(55, 55, 55, 1);
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: @height;
    z-index: 100;
    position: relative;

    .container {
      height: 100%;
      box-sizing: border-box;
    }

    h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;

      a {
        color: #fff;
        text-decoration: none;
        display: block;
      }

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid rgba(255, 255, 255, .5);
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }
    .nav {
      float: right;
      height: 100%;
      line-height: @height;
      background: transparent;
     // @utils-clearfix;
      padding: 0;
      margin: 0;
    }
    .nav-logo {
      vertical-align: middle;
      height:@height;
    }
    h1::after {
      content:"Twitter采集分析系统"
    }
    .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;
      margin-left: 20px;
    
      &:last-child {
        cursor: default;
        margin-left: 34px;
        span {
          opacity: .8;
        }
      }

      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 0 20px;
        opacity: .8;
        &.active,
        &:hover {
          opacity: 1;
        }
         
        &.active {
          font-weight: 700;
        }

        &.active::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background:rgb(196,196,196);
        }
      }
    }
  }
  .header-home {
    position: fixed;
    top: 0;
    background-color: rgba(32, 160, 255, 0);
  }

  .route-panel {
    text-align: center;
  }

  @media (max-width: 850px) {
    .header {
      h1::after {
        content:""
      }
      .system-title{
        display: none;
      }
      .nav-item {
        margin-left: 6px;

        &:last-child {
          margin-left: 10px;
        }
         
        a {
          padding: 0 5px;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .header {
      .container {
        padding: 0 12px;
      }
      .nav-item a{
        font-size: 12px;
        vertical-align: top;
      }
    }
  }
</style>
