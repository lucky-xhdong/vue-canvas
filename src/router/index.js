import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Canvas = (resolve) => require(['@/views/Canvas/Index'], resolve)
const Demo3 = (resolve) => require(['@/views/Canvas/demo3'], resolve)

/* Router Modules */
export const constantRoutes = [
  { path: '/canvas', name: 'Canvas', component: Canvas },
  { path: '/', name: 'Demo3', component: Demo3 }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]
