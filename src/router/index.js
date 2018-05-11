import Vue from 'vue'
import Router from 'vue-router'
import pipeLine from '@/components/pipeLine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pipeLine',
      component: pipeLine
    }
  ]
})
