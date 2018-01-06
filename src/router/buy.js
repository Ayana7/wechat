/* 路由懒加载*/
const BuyIndex = r => require.ensure([], () => r(require('../pages/buy/index/index')), 'group-index');

export default [
  {path:'/BuyIndex', component:BuyIndex, meta:{title:'我的首页'}},
]
