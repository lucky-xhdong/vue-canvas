import Vue from 'vue'
import App from './App.vue'
import './assets/css/common.css'
// 引入router
import router from './router'
import 'script-loader!createjs/builds/1.0.0/createjs.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
