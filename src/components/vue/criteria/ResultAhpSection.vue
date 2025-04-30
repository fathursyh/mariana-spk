<template>
    <summary class="w-full h-full flex flex-col justify-center items-center gap-6 overflow-x-auto" v-if="result !== undefined">
        <div class="grid xl:grid-cols-5 grid-cols-2 grid-rows-3 xl:grid-rows-1 gap-5 px-2">
            <div class="flex flex-col gap-2 items-center mb-4">
                <h3>Compressive Strength</h3>
                <p class="text-xl font-semibold">{{ inputData[result.winnersPerCriterion[0].winner].title }}</p>
                <p class="text-xs">( {{ result.winnersPerCriterion[0].score }} )</p>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <h3>Corrosion Resistance</h3>
                <p class="text-xl font-semibold">{{ inputData[result.winnersPerCriterion[1].winner].title }}</p>
                <p class="text-xs">( {{ result.winnersPerCriterion[1].score }} )</p>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <h3>Density</h3>
                <p class="text-xl font-semibold">{{ inputData[result.winnersPerCriterion[2].winner].title }}</p>
                <p class="text-xs">( {{ result.winnersPerCriterion[2].score }} )</p>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <h3>Cost</h3>
                <p class="text-xl font-semibold">{{ inputData[result.winnersPerCriterion[3].winner].title }}</p>
                <p class="text-xs">( {{ result.winnersPerCriterion[3].score }} )</p>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <h3>Fabricability</h3>
                <p class="text-xl font-semibold">{{ inputData[result.winnersPerCriterion[4].winner].title }}</p>
                <p class="text-xs">( {{ result.winnersPerCriterion[4].score }} )</p>
            </div>
        </div>
        <table class="min-w-96 bg-gray-700 border border-gray-300 rounded-lg shadow-md">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                    <th class="py-2 px-4 border-b">No</th>
                    <th class="py-2 px-4 border-b">Material</th>
                    <th class="py-2 px-4 border-b">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover:bg-gray-800 text-center" v-for="(item, i) in result.ranked" :key="item.name">
                    <td class="py-2 px-4 border-b">{{ i+1 }}</td>
                    <td class="py-2 px-4 border-b text-left">{{ item.name }}</td>
                    <td class="py-2 px-4 border-b">{{ item.score }}</td>
                </tr>
            </tbody>
        </table>
        <p>Alternatif terbaik dari ketiga material : <span class="font-semibold">{{ result.ranked[0].name }}</span></p>
        <CustomButton type="ghost" @click="$emit('onBack')">Back</CustomButton>
    </summary>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import CustomButton from "../composables/CustomButton.vue";
    import { actions } from "astro:actions";
    defineEmits(["onBack"]);
    const props = defineProps<{
        inputData: {title: string}[];
    }>();

    const result = ref();
    const getAhpResult = async() => {
        result.value = (await actions.getAhp(props.inputData.map(item => item.title))).data;
    }

    onMounted(() => {
        getAhpResult();
    })
</script>
