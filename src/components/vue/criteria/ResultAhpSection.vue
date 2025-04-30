<template>
    <summary class="w-full h-full flex flex-col justify-center items-center gap-6 overflow-x-auto">
        <table class="min-w-96 bg-gray-700 border border-gray-300 rounded-lg shadow-md">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                    <th class="py-2 px-4 border-b">No</th>
                    <th class="py-2 px-4 border-b">Material</th>
                    <th class="py-2 px-4 border-b">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover:bg-gray-800 text-center" v-for="(item, i) in result" :key="item.name">
                    <td class="py-2 px-4 border-b">{{ i+1 }}</td>
                    <td class="py-2 px-4 border-b text-left">{{ item.name }}</td>
                    <td class="py-2 px-4 border-b">{{ item.score }}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="result">Alternatif terbaik dari ketiga material : <span class="font-semibold">{{ result[0].name }}</span></p>
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
