import Vue from 'vue'
import Router from 'vue-router'
import DecisionMaker from '@/components/DecisionMaker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DecisionMaker',
      component: DecisionMaker
    }
  ]
})
