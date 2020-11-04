import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views//Home.vue'
import Config from '../views//Config.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',    //路由地址，在.vue中直接使用  放在index中
    name: 'Home',     //路由名称
    component: Home   //从开头位置#3定义后拿过来的内容
  },
  {
    path: '/config',
    name: 'Config',
    component: Config
  },
  {
    path: '/application',
    name: 'application',
    component: () => import ('../views/Application.vue')
  },
  {
    path: '/application2',
    name: 'application2',
    component: () => import ('../views/Application2.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import ('../views/Table.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
