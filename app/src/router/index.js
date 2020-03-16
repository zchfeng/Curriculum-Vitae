import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Base from '@/page/base'
import Experience from '@/page/experience'
import Appraise from '@/page/appraise'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      alias: '/index',
      component: Index
    },
    {
      path: '/base',
      name: 'Base',
      component: Base
    },
    {
      path:'/experience',
      name:'experience',
      component:Experience
    },
    {
      path:'/appraise',
      name:'appraise',
      component: Appraise
    }
  ]
})
