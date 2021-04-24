import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Canvas1 = (resolve) => require(['@/views/Canvas/Demo1/Index.vue'], resolve)

/* Router Modules */
export const constantRoutes = [
  { path: '/canvas1', name: 'Canvas', component: Canvas1 }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]
