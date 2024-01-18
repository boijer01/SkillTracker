import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddLearningItem from '../views/AddLearningItem.vue'
import Trophies from '../views/Trophies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'addlearningitem',
      component: AddLearningItem
    },
    {
      path: '/',
      name: 'trophies',
      component: Trophies
    }
    
  ]
})

export default router
