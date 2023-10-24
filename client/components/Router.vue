<script>
import { createWebHistory, createRouter } from 'vue-router'

const DEFAULT_TITLE = "Dagda"

// Router creation
// reading for later when auth ready: https://stackoverflow.com/questions/43424302/how-to-protect-client-side-routes-in-vue-js
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('../routes/home.vue'),
            meta: { title: `${DEFAULT_TITLE} | Home` }
        },
        {
            name: 'chat',
            path: '/chat',
            component: () => import('../routes/chat.vue'),
            meta: { title: `${DEFAULT_TITLE} | Chat` }
        },
        {
            name: 'donate',
            path: '/donate',
            component: () => import('../routes/donate.vue'),
            meta: { title: `${DEFAULT_TITLE} | Donate` }
        },
        {
            name: 'search',
            path: '/search',
            component: () => import('../routes/search.vue'),
            meta: { title: `${DEFAULT_TITLE} | Search` }
        },
        {
            name: 'statistics',
            path: '/statistics',
            component: () => import('../routes/statistics.vue'),
            meta: { title: `${DEFAULT_TITLE} | Statistics` }
        }
    ]
})
</script>