<script>
import { createWebHistory, createRouter } from 'vue-router'

const DEFAULT_TITLE = "Dagda"

// Router creation
// reading for later when auth ready: https://stackoverflow.com/questions/43424302/how-to-protect-client-side-routes-in-vue-js
export default createRouter({
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
            name: 'shop',
            path: '/shop',
            component: () => import('../routes/shop.vue'),
            meta: { title: `${DEFAULT_TITLE} | Shop` }
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
        },
        {
            name: 'legal',
            path: '/legal',
            component: () => import('../routes/legal.vue'),
            meta: { title: `${DEFAULT_TITLE} | Legal` }
        },
        {
            path: '/:pathMatch(.*)*', redirect: '/'
        }
    ]
})
</script>