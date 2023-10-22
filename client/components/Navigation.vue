<template>
    <nav>
        <router-link class="btn btn-outline-secondary text-light" active-class="active" exact-active-class="active-exact" to="/">Home</router-link>
        <router-link class="btn btn-outline-secondary text-light" active-class="active" exact-active-class="active-exact" to="/chat">Chat</router-link>
        <router-link class="btn btn-outline-secondary text-light" active-class="active" exact-active-class="active-exact" to="/statistics">Statistics</router-link>
        <router-link class="btn btn-outline-secondary text-light" active-class="active" exact-active-class="active-exact" to="/donate">Donate</router-link>
    </nav>
</template>

<style scoped>
nav a:last-child {
    margin-right:0;
}
nav a {
    margin-right:1em;
}
</style>