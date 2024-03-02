import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/consultar',
        component: () => import('../pages/GenerarToken.vue')
    },
    {
        path: '/guardar',
        component: () => import('../pages/GuardarEstudiante.vue')
    }
    ,
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/NotFoundPage.vue')
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router;