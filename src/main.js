import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import HelloWorld from './components/HelloWorld'
import Basket from './components/Basket'
import BasketCheckout from './components/BasketCheckout'
import MyAccount from './components/MyAccount'

const routers = [{
  name: 'Home',
  path: '/',
  component: HelloWorld
},{
  name: 'Basket',
  path: '/basket',
  component: Basket
},{
  name: 'BasketCheckout',
  path: '/basket/checkout',
  component: BasketCheckout
},{
  name: 'MyAccount',
  path: '/my-account',
  component: MyAccount
}]

const router = new VueRouter({mode: 'history', routes: routers})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
