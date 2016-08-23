<template>
  <!-- 侧边栏 -->
  <div class="sideBar-box" :class="{'show-sidebar':showSidebar}">
    <div class="swiper-slide">
      <!-- 侧边栏头部 v-link!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
      <div class="sidebar-header" @click="hiddenBar" v-link="{name: 'dingxl', params: { id: '666'}}">
        <div class="user">
          <img src="../assets/logo.png" alt="" />
          <p>dingxilin</p>
        </div>
        <div class="function">
          <div class="function-sub">
            <i class="iconfont">&#xe614</i>
            <p>我的收藏</p>
          </div>
          <div class="function-sub">
            <i class="iconfont">&#xe60f</i>
            <p>离线下载</p>
          </div>
        </div>
      </div>
      <!-- 侧边栏列表 -->
      <div class="sidebar-list">
        <p v-link="{path: '/'}" class="sidebar-list-first" @click="hiddenBar"><i class="iconfont">&#xe61b</i>首页</p>
        <ul class="sidebar-list-ul">
          <li class="sidebar-list-li" v-for="item in list" @click="hiddenBar" v-link="{name: 'theme', params: { id: item.id }}">
            <p>{{item.name}}</p>
            <div>+</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from '../ajax'
export default {
  props: ['showSidebar', 'tip'],
  data () {
    return {
      list: []
    }
  },
  ready () {
    this.getList()
  },
  // attached () {},
  methods: {
    getList () {
      let _this = this
      ajax({
        // url: 'http://api.yatessss.com:8888/news-at/api/4/themes',
        url: 'http://news-at.zhihu.com/api/4/themes',
        method: 'GET',
        callback: function (res) {
          _this.$set('list', res.others)
        }
      })
    },
    hiddenBar () {
      window.document.body.className = ''
      window.document.querySelector('html').className = ''
      this.showSidebar = !this.showSidebar
      this.tip = null
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .iconfont {
    font-family: "iconfont";
    font-size: 14px;
    font-style: normal;
    color: #ffffff;
  }

  .showSidebar {
    transform: translateX(290px);
  }

  .sideBar-box {
    position: fixed;
    transform: translateZ(0);
    height: 100%;
    overflow: auto;
    width: 290px;
    left: -290px;
    top: 0;
    bottom: 0;
    z-index: 99;
    transition: all .3s ease;
    &.show-sidebar {
      transform: translateX(290px);
    }
    .swiper-slide {
      height: auto;
      font-size: 15px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
  .sideBar-box{
    .sidebar-header {
      // height: 100px;
      background-color: #00A2EA;
      color: #ffffff;
      padding: 15px;
      .user {
        display: flex;
        // flex-direction: row;
        >img {
          width: 30px;
          height: 30px;
          border: 1px solid #fff;
          border-radius: 50%;
        }
        >p {
          margin-left: 15px;
          line-height: 30px;
          flex: 1;
          font-size: 18px;
          font-weight: 300;
        }
      }
    }
    .function {
      display: flex;
      margin-top: 20px;
      flex-direction: row;
      // width: 100%;
      .function-sub {
        padding-left: 52px;
        position: relative;
        flex: 1;
        font-size: 14px;
        font-weight: 300;
      }
      i {
        position: absolute;
        font-size: 14px;
        top: 0;
        left: 20px;
      }
    }
  }
  .sidebar-list {
    padding-bottom: 20px;
    background-color: #f9f9f9;
    .sidebar-list-first {
      color: #00A2EA;
      background-color: #f9f9f9;
      height: 47px;
      line-height: 47px;
      font-size: 15px;
      padding-left: 55px;
      position: relative;
      >i {
        color: #00A2EA;
        font-size: 20px;
        position: absolute;
        top: 0;
        left: 20px;
      }
    }
    .sidebar-list-li {
      height: 47px;
      line-height: 47px;
      display: flex;
      padding-left: 15px;
      >p {
        flex: 1;
      }
      >div {
        padding-right: 40px;
        font-size: 25px;
        font-weight: 200;
        color: #868686;
      }
    }
  }








































</style>
