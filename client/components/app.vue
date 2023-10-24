<!--
    This file functions as the router. It mounts content onto #app.
    It uses the Template.vue component to generate the page around the corresponding route component.
-->

<script>
// Import
import { createApp } from 'vue'
import Template from './Template.vue'
import { router } from './router.vue'

// App creation
const app = createApp({
    template: `<Template><router-view></router-view></Template>`,
    components: { Template },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Dagda';
            }
        },
    }
})

// App setup
app.use(router)
app.mount('#app')

// Export
export default app
</script>