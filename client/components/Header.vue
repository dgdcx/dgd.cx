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
        <!--<div class="alert alert-light mt-3 mb-0 text-center" role="alert">
            This website is under construction. For up to date information, hop in our discord at <a class="alert-link" target="_blank" href="https://discord.gg/9UcvFa63Wf">discord.gg/9UcvFa63Wf</a>.
        </div>-->
    </header>
</template>

<style scoped>
</style>