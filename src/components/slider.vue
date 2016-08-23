<!-- 轮播图 -->
<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in top_stories" class="swiper-slide" :style="{ backgroundImage: 'url(' + replace(item.image) + ')' }" v-link="{name: 'detail', params: { id: item.id }}">
          <h1 class="slider-title">{{item.title}}</h1>
        </div>
      </div>
      <!-- Add Pagination -->
    <div class=" swiper-pagination"></div>
    </div>
</template>

<script>
  /*eslint-disable no-new*/
  export default{
    props: ['top_stories'],
    data () {
      return {
      }
    },
    ready () {
      new window.Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        observer: true,
        lazyLoading: true,
        resistanceRatio: 0
      })
    },
    methods: {
      replace (str) {
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    }
  }
</script>

<style lang= "scss" rel="stylesheet/scss">
  @import "../assets/css/swiper-3.3.1.min.css";
  .swiper-container{
    height: 230px;
  }
  .swiper-slide {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    position: relative;
    box-shadow: 0 0 200px rgb(50,50,50) inset;
    .slider-title {
      position: absolute;
      bottom: 24px;
      padding: 0 18px;
      color: #ffffff;
      font-size: 20px;
    }
  }
  .swiper-pagination-bullet{
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background: #5a5a5a;
    opacity: .8;
  }
  .swiper-pagination-bullet-active{
    opacity: .6;
    background: #f4f5ff;
  }
  .swiper-mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
    background-image: linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
  }

</style>
