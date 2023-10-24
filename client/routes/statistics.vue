<script>
import PieChart from '../components/PieChart.vue';
export default {
    components: {
        PieChart
    }
}
</script>

<template>
    <main class="container p-3 d-flex flex-wrap flex-column align-items-center justify-content-center justify-content-lg-start">
        <h1>Statistics</h1>
        <PieChart/>
    </main>
    <component is="script" src="https://cdn.jsdelivr.net/npm/chart.js" async></component>
</template>