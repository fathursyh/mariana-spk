<template>
    <article class="w-full h-full flex flex-col justify-center items-center p-6 gap-4">
        <h4 class="font-bold text-xl">Compressive</h4>
        <canvas id="cs"></canvas>
    </article>
</template>

<script setup lang="js">
    import { onMounted } from 'vue';
    import { BarController, BarElement, CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Tooltip } from 'chart.js';
    const props = defineProps(['chartData']);
    Chart.register([
        CategoryScale,
        BarController,
        BarElement,
        LinearScale,
        Tooltip,
    ]);
    const data = [
        { year: "Titanium", count: 10 },
        { year: "Ferrum", count: 20 },
        { year: "Carbon", count: 15 },
        { year: "Aluminium", count: 25 },
        { year: "Nickel", count: 22 },
    ];
    onMounted(() => {
        const canvas = document.getElementById('cs');
        const chart = new Chart(
            canvas,
            {
                type: 'bar',
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true,
                            yAlign: 'bottom'
                        }
                    }
                },
                data: {
                    labels: data.map(row => row.year),
                    datasets: [{
                        label: 'Weight',
                        data: props.chartData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                        ],
                        borderWidth: 1,
                    }]
                }
            }
        );
    });
</script>
