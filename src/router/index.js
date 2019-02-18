import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Users from '@/components/users.vue'
import Right from '@/components/right.vue'
import Roles from '@/components/roles.vue'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      name: 'users',
      path: '/users',
      component: Users
    }, {
      name: 'right',
      path: '/right',
      component: Right
    },{
      name:'roles',
      path: '/roles',
      component:Roles
    }]
  }]
})
