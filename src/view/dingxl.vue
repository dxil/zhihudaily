<template>
  <div class="dingxl">
    <div class="header-icon" @click="goBack"><i class="iconfont">&#xe603</i></div>
    <div class="main-box">
      <img  src = "../assets/author.png" alt = "balala"/>
      <p class="name">Dingxl</p>
      <div class="My-address">
        <a class="github" href="https://github.com/dxil"><i>&#xe735</i></a>
        <a class="sina" href="http://weibo.com/dxilin"><i>&#xe62a</i></a>
        <a class="blog" href="http://dingxl.com"><i>&#xe605</i></a>
      </div>
      <p class="item">软件工程在读，即将大四</p>
      <p class="item">前端实习求职中~。~</p>
      <a class="project" href="http://dingxl.com">项目总结地址</a>
    </div>
  </div>
</template>

<script>
  /*eslint-disable no-new*/
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    attached () {
    },
    methods: {
      goBack () {
        window.history.back()
      }
    }
  }
</script>

<style scoped lang="scss"  rel="stylesheet/scss">
@font-face {font-family: "iconfont-x";
  src: url('../assets/iconfonts/iconfont.eot'); /* IE9*/
  src: url('../assets/iconfonts/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('../assets/iconfonts/iconfont.woff') format('woff'), /* chrome, firefox */
  url('../assets/iconfonts/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../assets/iconfonts/iconfont.svg?#iconfont') format('svg'); /* iOS 4.1- */
}
.dingxl {
  margin-top: 20px;

}
.iconfont {
  padding-left: 20px;
  font-family: "iconfont";
  font-size: 24px;
  font-style: normal;
  color: #00A2EA;
}
.main-box {
  margin-top: 100px;
  height: 300px;
  text-align: center;
  font-size: 20px;
  >img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .My-address{
    i {
      font-family: "iconfont-x";
      font-size: 36px;
      margin-left: 20px;
      font-style: normal;
    }
    a:nth-child(1) i {
      color: black;
    }
    a:nth-child(2) i {
      font-size: 38px;
      color: rgb(232, 48, 69);
    }
    a:nth-child(3) i {
      font-size: 42px;
      color: #00A2EA;
    }
  }
  >p {
    margin-top: 20px;
  }
  .name {
    font-size: 24px;
    font-weight: 900;
    margin: 20px 0;
  }
}
.project {
  display: block;
  margin-top: 20px;
}

</style>
