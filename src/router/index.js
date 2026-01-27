import Experience from '@/views/experience.vue'
import Home from '@/views/home.vue'
import Profile from '@/views/profile.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', name:'home', component:Home},
    {path:'/profile', name:'profile', component:Profile},
    {path:'/exp', name:'exp',component:Experience}
  ],
})

export default router
