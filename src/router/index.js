import { createRouter, createWebHistory } from 'vue-router'
import Incidentes from '../views/Incidentes.vue'
import Cadastrar from '../views/Cadastrar.vue'
import Assinar from '../views/Assinar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Incidentes',
      component: Incidentes
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: Cadastrar
    },
    {
      path: '/assinar/:id',
      name: 'assinar-id',
      component: Assinar
    }
  ]
})

export default router
