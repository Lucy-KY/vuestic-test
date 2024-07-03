import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AppLayout from '../layouts/AppLayout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/',
    component: AppLayout,
    redirect: { name: 'dashboard' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'users',
        path: 'users',
        component: () => import('../pages/services/UsersPage.vue'),
      },
      {
        name: 'services',
        path: 'services',
        component: RouteViewComponent,
        children: [
          {
            name: 'apps',
            path: 'apps',
            component: () => import('../pages/services/UsersPage.vue'),
          },
          {
            name: 'people',
            path: 'people',
            component: () => import('../pages/people/PeoplePage.vue'),
          },
          {
            name: 'manage',
            path: 'manage',
            component: () => import('../pages/manage/ManagePage.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      window.scrollTo(0, 0)
    }
  },
  routes,
})

export default router
