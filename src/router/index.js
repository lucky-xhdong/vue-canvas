import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Canvas = (resolve) => require(['@/views/Canvas/Demo/Index.vue'], resolve)
const Canvas1 = (resolve) => require(['@/views/Canvas/Demo1/Index.vue'], resolve)
const Canvas2 = (resolve) => require(['@/views/Canvas/Demo2/Index.vue'], resolve)

/* Router Modules */
export const constantRoutes = [
  { path: '/canvas', name: 'Canvas', component: Canvas },
  { path: '/canvas1', name: 'Canvas1', component: Canvas1 },
  { path: '/canvas2', name: 'Canvas2', component: Canvas2 }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]
