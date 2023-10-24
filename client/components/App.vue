<!--
    It mounts content onto #app.
-->

<script>
// Import
import { createApp } from 'vue'
import template from './Template.vue'
import { router } from './Router.vue'

// App creation
const app = createApp({
    template: `<template><router-view></router-view></template>`,
    components: { template },
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