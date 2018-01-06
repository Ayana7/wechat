const KeepIndex = r => require.ensure([], () => r(require('../pages/keep/index/index')), 'group-index');

export default [
  {path:'/KeepIndex', component:KeepIndex, meta:{title:'养车'}},
]
