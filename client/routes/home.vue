<script>
import News from '../components/News.vue'
import Carousel from '../components/Carousel.vue'
export default {
    components: {
        News,
        Carousel,
    }
}
</script>

<template>
    <div class="d-none d-lg-block container p-0 mt-3 border rounded"><Carousel class="rounded overflow-hidden d-flex justify-content-center align-items-center shadow" style="height:20em;"/></div>
    <main
        class="container p-0 mt-3">
        <div>
            <h1>Welcome!</h1>
            <p>Thanks for visiting dgd.cx, website of The Dagda Federation. We're a gaming community federation that is home
                to
                Voxide, Peak, The Hallway, and Ace of Spades global. Our website doesn't have a lot to offer yet, so check
                back
                soon.</p>
        </div>
        <div>
            <h1>Donating</h1>
            <p>Due to required compliance with our payment processor Stripe, we are forbidden from crowd funding or receiving donations. However, you can still support us by
                purchasing VIP on our <router-link to="/shop">shop page</router-link>.</p>
        </div>
</main></template>