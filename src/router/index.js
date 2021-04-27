import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Demo1 = (resolve) => require(['@/views/Canvas/demo1'], resolve)

/* Router Modules */
export const constantRoutes = [
  { path: '/demo1', name: 'Demo1', component: Demo1 }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]
