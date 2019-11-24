
// router配置文件
import Router from 'vue-router'
import Index from '../views/indexPage/index.vue'
import My from '../views/myPage/my.vue'
import ClassPage from '../views/classifyPage/classify.vue'
import Shopcar from '../views/shoppingCarPage/shopCar.vue'
import IndexClass from '../views/indexPage/indexClass.vue'
import Detail from '../views/detail/detail.vue'
import Register from '../views/myPage/register.vue'
import Login from '../views/myPage/login.vue'
import Discuss from '../views/discuss/discuss.vue'

// 路由需要实例化 写配置项
const router = new Router({
  mode: "history",
  base: "teemo",
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes : [
    // 默认路由（根路由）
    {
      path: '/',
      // 重定向
      redirect:'/index'
    },
    // 首页
    {
      props: true,
      path: '/index',
      component: require('../views/indexPage/index.vue').default,
      meta: {
        flagHeader: true,
        flagFooter: true,
        headerBac: false,
      }
    },
    // 首页到分类
    {
      path: '/pages/cate/cate-list',
      component: require('../views/indexPage/indexClass.vue').default,
      name: "indexToClass",
      meta:{
        name: "indexToClass",
        flagHeader: true,
        flagFooter: false
      }
    },
    // 分类
    {
      path: '/classify/:id',
      component: require('../views/classifyPage/classify.vue').default,
      name: "classify",
      meta: {
        name: 'classify',
        title: '这是分类页',
        flagHeader: true,
        flagFooter: true,
        headerBac: true,
      },
    },
    // 购物车
    {
      path: '/cart',
      component: require('../views/shoppingCarPage/shopCar.vue').default,
      name:'shopCar',
      meta:{
        flagHeader: true,
        flagFooter: true,
        headerBac: true,
      }
    },
   // 详情页
    {
    path: '/detail',
    component: require('../views/detail/detail.vue').default,
    name:"detail",
    meta:{
      flagHeader: false,
      flagFooter: false,
      headerBac: false,
      }
    },
    // 评价页
    {
      path: '/discuss',
      component: require('../views/discuss/discuss.vue').default,
      name:"discuss",
      meta:{
        flagHeader: true,
        flagFooter: false,
        headerBac: false,
        }
      },
      // 我的
      {
        path: '/my',
        component: require('../views/myPage/my.vue').default,
        meta:{
          flagHeader: true,
          flagFooter: true,
          headerBac: false,
          keepAlive: true
        }
      }, 
    // 登录页
      {
        path: '/login',
        component: require('../views/myPage/login.vue').default,
        meta:{
          flagHeader: true,
          flagFooter: false,
          headerBac: true,
      }
      }, 
      // 注册页
      {
        path: '/register',
        component: require('../views/myPage/register.vue').default,
        meta:{
          flagHeader: true,
          flagFooter: false,
          headerBac: true,
        }
      },
  ]
})

// 向外暴露出配置好的router
export default router