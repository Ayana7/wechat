const DiscoveryIndex = r => require.ensure([], () => r(require('../pages/discovery/index/index')), 'group-index');

export default [
  {path:'/DiscoveryIndex', component:DiscoveryIndex, meta:{title:'发现'}},
]
