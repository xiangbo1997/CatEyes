import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header/Header.vue'
import router from './router/index.js'
import elementUI from 'element-ui'
import Nav from './components/Nav/Nav.vue'
import store from './store' 
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
Vue.component('Header',Header)
Vue.component('Nav',Nav)
Vue.use(elementUI)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store
})