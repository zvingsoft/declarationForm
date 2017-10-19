// 路由设置
const routes = [
  {
    path: '/',
    redirect: '/form/declaration'
  },
  {
    path: '/form',
    name: 'form',
    meta: { title: '通关', icon: 'fa fa-ship' },
    component: require('../views/form/index.vue'),
    children: [
      {
        path: 'declaration',
        meta: { title: '报关单', icon: 'fa fa-file-text-o' },
        component: require('../views/form/declaration.vue')
      },
      {
        path: 'auditing',
        meta: { title: '审核', icon: 'fa fa-file-text-o' },
        component: require('../views/form/auditing.vue')
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: { title: '配置', icon: 'fa fa-sliders' },
    component: require('../views/setting/index.vue'),
    children: [
      {
        path: 'tax',
        meta: { title: '税率管理', icon: 'fa fa-file-text-o' },
        component: require('../views/setting/tax.vue')
      },
      {
        path: 'license',
        meta: { title: '许可证管理', icon: 'fa fa-file-text-o' },
        component: require('../views/setting/license.vue')
      },
      {
        path: 'taxCutting',
        meta: { title: '减免税管理', icon: 'fa fa-file-text-o' },
        component: require('../views/setting/taxCutting.vue')
      },
      {
        path: 'manifest',
        meta: { title: '舱单管理', icon: 'fa fa-file-text-o' },
        component: require('../views/setting/manifest.vue')
      },
      {
        path: 'processingTrade',
        meta: { title: '加贸管理', icon: 'fa fa-file-text-o' },
        component: require('../views/setting/processingTrade.vue')
      },
      {
        path: 'cottonQuota',
        meta: { title: '棉花配额管理', icon: 'fa fa-file-text-o' },
        component: require('../views/setting/cottonQuota.vue')
      },
      {
        path: 'company',
        meta: { title: '企业管理', icon: 'fa fa-file-text-o' },
        component: require('../views/setting/company.vue')
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: { title: '系统', icon: 'fa fa-cogs' },
    component: require('../views/system/index.vue'),
    children: [
      {
        path: 'user',
        meta: { title: '用户管理', icon: 'fa fa-file-text-o' },
        component: require('../views/system/user.vue')
      },
      {
        path: 'role',
        meta: { title: '角色管理', icon: 'fa fa-file-text-o' },
        component: require('../views/system/role.vue')
      }
    ]
  },
  {
    path: '/*',
    component: require('../views/error/404.vue')
  }
]

module.exports = routes
