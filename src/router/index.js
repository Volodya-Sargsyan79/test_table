import { createRouter, createWebHashHistory } from 'vue-router'
import General from '../views/General.vue'
import WriteOffItem from '../views/WriteOffItem.vue'
import AddExpenses from '../views/AddExpenses.vue'

const routes = [
  {
    path: '/',
    name: 'general',
    component: General
  },
  {
    path: '/writeOffItem',
    name: 'writeOffItem',
    component: WriteOffItem
  },
  {
    path: '/addExpenses',
    name: 'addExpenses',
    component: AddExpenses
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
