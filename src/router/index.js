import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Now from '@/components/Now'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/now'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/now',
      name: 'Now',
      component: Now
    }
  ]
})
