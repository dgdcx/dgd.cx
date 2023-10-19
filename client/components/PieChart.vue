<script>
export default {
    methods: {
        mounted() {
            const labels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
            ];
            const chartData = {
                labels: labels,
                datasets: [{
                    label: 'My First dataset',

                    data: [0, 10, 5, 2, 20, 30, 45],
                }]
            };

            const config = {
                type: 'line',
                data: chartData,
                options: {}
            };


            var myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
        }
    }
}
</script>

<template>
    <canvas id="myChart" width="200" height="200"></canvas>
</template>

<style>
#myChart {
    width: 100%;
    height: 100%;
}
</style>