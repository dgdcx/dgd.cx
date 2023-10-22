<script>
import News from '../components/News.vue'
import Chat from '../components/Chat.vue'
import Carousel from '../components/Carousel.vue'
export default {
    components: {
        News,
        Chat,
        Carousel,
    }
}
</script>

<template>
    <div class="container p-0 mt-3 border rounded"><Carousel class="rounded overflow-hidden d-flex justify-content-center align-items-center shadow" style="height:20em;"/></div>
    <main class="container p-0 d-flex flex-wrap flex-column align-items-center justify-content-center justify-content-lg-start">
        <News/><Chat/>
    </main>
</template>