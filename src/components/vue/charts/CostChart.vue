<template>
    <article class="xl:w-[50%] xl:h-[50%] flex flex-col justify-center items-center p-6 gap-4 xl:absolute xl:translate-y-[50%] xl:translate-x-[50%] xl:z-20 xl:bg-gray-100 xl:border border-gray-400 xl:shadow-lg xl:rounded-lg xl:cursor-pointer transition-all duration-300" :class="[!isMobile && {'xl:opacity-35': nonCost}]" @click="() => {!isMobile && $emit('on-close')}" @mouseleave="nonCost = true" @mouseenter="nonCost = false">
        <h4 class="font-bold text-xl">Cost</h4>
        <canvas id="ct"></canvas>
    </article>
</template>

<script setup lang="js">
    import { onMounted, ref } from 'vue';
    import { BarController, BarElement, CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement } from 'chart.js';
    defineEmits(['on-close']);
    const props = defineProps({
        isMobile: {type: Boolean, default: false},
        chartData: {type: Array}
    })
    const nonCost = ref(false);

    Chart.register([
        CategoryScale,
        BarController,
        BarElement,
        LinearScale,
    ]);
    const data = [
        { year: "Titanium", count: 10 },
        { year: "Ferrum", count: 20 },
        { year: "Carbon", count: 15 },
        { year: "Aluminium", count: 25 },
        { year: "Nickel", count: 22 },
    ];
    onMounted(() => {
        const canvas=document.getElementById('ct');
        const chart = new Chart(
            canvas,
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [{
                        label: 'My First Dataset',
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
