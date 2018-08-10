import Vue from 'vue'
import Router from 'vue-router'
import Course from '@/components/Course'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
      path: '/course',
      name: 'course',
      component: Course
    }
  ]
})
