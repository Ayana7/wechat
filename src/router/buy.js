/* 路由懒加载*/
const BuyIndex = r => require.ensure([], () => r(require('../pages/buy/index/index')), 'group-index');
const CarDetail = r => require.ensure([], () => r(require('../pages/buy/car-detail/car-detail')), 'group-car-detail');


export default [
  {path:'/BuyIndex', component:BuyIndex, meta:{title:'买车'}},
  {path:'/CarDetail',component: CarDetail, meta: {title:'车型详情'}},


]
