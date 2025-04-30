<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import CompressiveChart from "./CompressiveChart.vue";
    import CorrosionChart from "./CorrosionChart.vue";
    import CostChart from "./CostChart.vue";
    import DensityChart from "./DensityChart.vue";
    import FabricabilityChart from "./FabricabilityChart.vue";
    import CustomButton from "../composables/CustomButton.vue";
    import { actions } from "astro:actions";
    const showCost = ref(false);
    const chartData = ref();
    async function getChartData() {
        chartData.value = (await actions.getChartData()).data;
    }
    onMounted(() => {
        getChartData();
    });
</script>

<template>
    <section class="w-full min-h-screen bg-gray-100 xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto grid xl:grid-cols-2 xl:grid-rows-2 divide-gray-300 divide-y divide-x divide-dashed rounded-lg relative" v-if="chartData">
        <CompressiveChart :chartData="chartData[0]"  />
        <CorrosionChart :chartData="chartData[1]"  />
        <DensityChart :chartData="chartData[2]"  />
        <Transition name="fade">
            <CostChart v-if="showCost" @on-close="showCost = false" class="hidden xl:flex" :chartData="chartData[3]" />
        </Transition>
        <CostChart class="xl:hidden" :isMobile="true" :chartData="chartData[3]" />
        <CustomButton class="absolute z-10 text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden xl:inline-block" type="secondary" @click="showCost = true" v-show="!showCost">Show Cost</CustomButton>
        <FabricabilityChart :chartData="chartData[4]"  />
    </section>
</template>
