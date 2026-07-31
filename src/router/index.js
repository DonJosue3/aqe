import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/views/Index.vue'
import Menu from '@/views/Menu.vue'
import Services from '@/views/Services.vue'
import Shop from '@/views/Shop.vue'

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router