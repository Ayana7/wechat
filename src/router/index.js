import Vue from 'vue'
import Router from 'vue-router'
// 引入子路由
import buyRoute from './buy'
import keepRoute from './keep'
import discoveryRoute from './discovery'

const baseRoute = [{path:'/',redirect:'/BuyIndex'}]

Vue.use(Router)

/* 路由配置*/
var router = new Router({
  routes: baseRoute.concat(buyRoute, keepRoute, discoveryRoute)
})

router.beforeResolve((to, from, next) => {  //全局解析守卫
  // 修改页面title
  document.title = to.meta.title ? to.meta.title : document.title;
  next()
})

export default router
