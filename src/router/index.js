import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 路由懒加载*/
const Index = r => require.ensure([], () => r(require('../pages/index')), 'index');
const Register = r => require.ensure([], () => r(require('../pages/register')), 'index');

/* 路由配置*/
var router = new Router({
  routes: [
    {path: '/', redirect: '/Index'},
    {path: '/Index', component: Index, meta: {title: '首页'}},
    {path: '/Register', component: Register, meta: {title: '注册'}},
  ]
})

router.beforeResolve((to, from, next) => {  //全局解析守卫
  // 修改页面title
  document.title = to.meta.title ? to.meta.title : document.title;
  next()
})

export default router
