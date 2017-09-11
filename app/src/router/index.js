import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Frontend from '@/views/frontend'
import NativeDev from '@/views/native_dev'
import StartUp from '@/views/start_up'
import UX from '@/views/ux'
import UI from '@/views/ui'
import TechFun from '@/views/tech_fun'
import AppTool from '@/views/app_tool'
import Overseas from '@/views/overseas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: Frontend
    },
    {
      path: '/native_dev',
      name: 'native_dev',
      component: NativeDev
    },
    {
      path: '/start_up',
      name: 'start_up',
      component: StartUp
    },
    {
      path: '/ux',
      name: 'ux',
      component: UX
    },
    {
      path: '/ui',
      name: 'ui',
      component: UI
    },
    {
      path: '/tech_fun',
      name: 'tech_fun',
      component: TechFun
    },
    {
      path: '/app_tool',
      name: 'app_tool',
      component: AppTool
    },
    {
      path: '/overseas',
      name: 'overseas',
      component: Overseas
    }
  ]
})
