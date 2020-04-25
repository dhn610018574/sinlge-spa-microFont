import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vue',
    name: 'vue',
    // route level code-splitting
    // this generates a separate chunk (Vue.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Vue" */ '../components/Vue.vue'),
  },
  {
    path: '/react',
    name: 'react',
    // route level code-splitting
    // this generates a separate chunk (Vue.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "React" */ '../components/React.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
