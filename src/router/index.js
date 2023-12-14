import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: import('@/views/AboutView.vue') },
    { path: '/chats', component: import('@/views/ChatsView.vue') }
  ]
})

export default router
