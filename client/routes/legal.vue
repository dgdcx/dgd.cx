<script>
export default {
    mounted() {
        /*fetch('/legal/terms.md')
            .then(response => response.text())
            .then(text => {
                document.getElementById('terms').innerHTML = window.markdownit().render(text);
            });*/
        fetch('/legal/privacy.md')
            .then(response => response.text())
            .then(text => {
                document.getElementById('privacy').innerHTML = window.markdownit().render(text);
            });
        /*fetch('/legal/shop.md')
            .then(response => response.text())
            .then(text => {
                document.getElementById('shop').innerHTML = window.markdownit().render(text);
            });*/
    }
}
</script>

<template>
    <component is="script" src="https://cdn.jsdelivr.net/npm/markdown-it@13.0.2/dist/markdown-it.min.js" />
    <main class="container">
        <h1>Legal</h1>
        <div id="terms" class=""></div>
        <div id="privacy" class=""></div>
        <div id="shop" class=""></div>
    </main>
</template>

<style>
</style>