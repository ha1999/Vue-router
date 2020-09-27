import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    props: true
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    props: true,
    component: () => import ('../views/DestinationDetails.vue'),
    children:[
      {
         path: ':experienceSlug',
         name: 'experienceDetails',
         props: true,
         component: () => import ('../views/ExperienceDetails.vue'),
         beforeEnter: (to, from, next) => {
          const destination = Store.destinations.find(
           destination => destination.slug === to.params.slug
          )
          const exists = destination.experiences.find(
            experience => experience.slug === to.params.experienceSlug
          )
          if(exists)next()
          else {
            next({name: 'NotFound'})
          }
        }
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = Store.destinations.find(
       destination => destination.slug === to.params.slug
      )
      if(exists)next()
      else {
        next({name: 'NotFound'})
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/Login.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import ('../views/User.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () => import ('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!Store.user)next({name: "login"})
    else next()
  }
  else next()
})

export default router
