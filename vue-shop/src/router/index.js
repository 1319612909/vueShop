import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '@/components/login'
const routes = [
    {path:'/',redirect:'/login'},
    { path: '/Login', component: Login },
  ]
  

  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  export default  router