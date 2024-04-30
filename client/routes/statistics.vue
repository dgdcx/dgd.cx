<script>
import PieChart from '../components/PieChart.vue';
import JSONTable from '../components/JSONTable.vue';
export default {
    components: {
        PieChart,
        JSONTable
    }
}
</script>

<template>
    <main class="container p-3 d-flex flex-wrap flex-column align-items-center justify-content-center justify-content-lg-start">
        <h1>Statistics</h1>
        <!--<PieChart/>-->
        <div class="d-flex flex-wrap flex-lg-row flex-column align-items-center justify-content-center justify-content-lg-start">
            <JSONTable class="me-lg-3 mb-3" title="Peak Emeralds Leaderboard" endpoint="https://eitri.dgd.cx/json/peak" />
            <JSONTable class="mb-3" title="Voxide Discord Leaderboard" endpoint="https://eitri.dgd.cx/json/discord/141416731074625537" />
        </div>
    </main>
    <component is="script" src="https://cdn.jsdelivr.net/npm/chart.js" async></component>
</template>

<style>
</style>