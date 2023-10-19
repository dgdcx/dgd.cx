<script>
    import Navigation from './Navigation.vue'
    import Search from './Search.vue'
    import Identity from './Identity.vue'
    export default {
        components: {
            Navigation,
            Search,
            Identity
        }
    }
</script>

<template>
    <header class="container bg-body-tertiary rounded-bottom p-3 border-start border-bottom border-end shadow-lg">
        <div class="d-flex flex-wrap justify-content-center align-items-center ">
            <Navigation class="col-md-auto col-12 me-md-auto m-0"/>
            <Search class="col-md-auto col-12 me-md-3 m-0"/>
            <Identity class="col-md-auto col-12 m-0"/>
        </div>
    </header>
</template>

<style scoped>
</style>