<!--
    It mounts content onto #app.
-->

<script>
// Import
import { createApp } from 'vue'
import Template from './Template.vue'
import Router from './Router.vue'

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
app.use(Router)
app.mount('#app')

// Export
export default app
</script>