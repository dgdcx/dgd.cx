<!--
    This document is basically the template for all pages
-->
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<template>
    <div class="container-fluid m-0 p-0"><Header /></div>
    <div class="container-fluid m-0 p-0 flex-grow-1 d-flex flex-column"><slot></slot></div>
    <div class="container-fluid m-0 p-0 mt-auto"><Footer /></div>
</template>

<style>
body {
    background-image:url('../checker.svg');
    background-repeat: repeat;
    background-size: 0.5rem 0.5rem;
}
</style>