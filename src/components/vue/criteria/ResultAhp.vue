<script setup lang="ts">
    import CustomButton from '../composables/CustomButton.vue';
    import { ref } from 'vue';
    import ResultAhpSection from './ResultAhpSection.vue';
    const start = ref(false);

    const altData = ref([]);
    const analyze = () => {
        altData.value = JSON.parse(sessionStorage.getItem('alternative')!);
        if (altData.value === null) {
            alert('Isi kapal selam terlebih dahulu!');
            document.getElementById('input-alt')?.scrollIntoView();
            return;
        }
        if (altData.value.length < 3) {
            alert('Masukan minimal 3 material alternatif.');
            document.getElementById('input-alt')?.scrollIntoView();
            return;
        }
        start.value = true;
    }
    const backHome = () => {
        start.value = false;
        altData.value.length = 0;
    }
</script>

<template>
    <div class="w-full h-full backdrop-blur-xs p-12 transition-colors duration-500 text-white" :class="[!start ? 'bg-gradient-to-b from-gray-700 to-gray-900' : '']">
       <Transition name="fade" mode="out-in">
        <div class="w-full h-full grid place-items-center" v-if="!start">
            <CustomButton type="secondary" class="active:scale-75 animate-pulse hover:animate-none" @click="analyze">Analyze!</CustomButton>
        </div>
        <ResultAhpSection v-else @onBack="backHome" :inputData="altData" />
       </Transition>
    </div>
</template>