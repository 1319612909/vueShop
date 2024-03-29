import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '@/components/login'
import Home from '@/views/home'
const routes = [
    {path:'/',redirect:'/login'},
    { path: '/login', component: Login },
    { path: '/home', component: Home },
  ]
  

  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

router.beforeEach((to,from,next)=>{
  if(to.path =='/login') return next()
  let token = sessionStorage.getItem('Token')
  if(!token) return next('/login')
  next()
})

  export default  router