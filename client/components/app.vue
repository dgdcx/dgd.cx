<!--
    This file functions as the router. It mounts content onto #app.
    It uses the Template.vue component to generate the page around the corresponding route component.
-->

<script>
// Import
import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Template from './Template.vue'

// Router creation
// reading for later when auth ready: https://stackoverflow.com/questions/43424302/how-to-protect-client-side-routes-in-vue-js
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('../routes/home.vue')
        },
        {
            name: 'chat',
            path: '/chat',
            component: () => import('../routes/chat.vue')
        },
        {
            name: 'donate',
            path: '/donate',
            component: () => import('../routes/donate.vue')
        },
        {
            name: 'search',
            path: '/search',
            component: () => import('../routes/search.vue')
        },
        {
            name: 'statistics',
            path: '/statistics',
            component: () => import('../routes/statistics.vue')
        }
    ]
})

// App creation
const app = createApp({
    template: `<Template><router-view></router-view></Template>`,
    components: { Template }
})

// App setup
app.use(router)
app.mount('#app')

// Export
export default app
</script>