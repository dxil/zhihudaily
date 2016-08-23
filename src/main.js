import 'lib-flexible'
import FastClick from 'fastclick'
window.FastClick = FastClick
import Vue from 'vue'
// import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(VueRouter)

import home from './view/home.vue'
import homeDefault from './components/home-default.vue'
import homeTheme from './components/home-theme.vue'
import detail from './view/detail.vue'
import comments from './view/comments.vue'
import recommender from './view/recommender.vue'
import section from './view/section.vue'
import dingxl from './view/dingxl.vue'

import Swiper from 'swiper'
window.Swiper = Swiper

import util from './util.js'
Object.keys(util).forEach((k) => Vue.filter(k, util[k]))

let App = Vue.extend({})
// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
// var Apptest = Vue.extend({})
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置

var router = new VueRouter()
// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。

router.map({
  '/': {
    component: home,
    subRoutes: {
      '/': {
        component: homeDefault
      },
      '/theme/:id': {
        name: 'theme',
        component: homeTheme
      }
    }
  },
  '/dingxl/:id': { // 个人简介
    name: 'dingxl',
    component: dingxl
  },
  '/detail/:id': { // 日报的详细介绍
    name: 'detail',
    component: detail
  },
  '/comments': { // 日报的评论页
    component: comments
  },
  '/recommender': { // 推荐者页面
    component: recommender
  },
  '/section': { // 日报的合集页面
    component: section
  }
})

// 现在我们可以开始启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')
