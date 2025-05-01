<script setup lang="ts">
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
    <div class="w-full min-h-screen backdrop-blur-xs transition-colors duration-500 grid place-items-center text-white"
        :class="[!start ? 'bg-gradient-to-b from-gray-400 to-gray-800' : '']">
        <Transition name="fade" mode="out-in">
            <div class="w-full h-full grid place-items-center" v-if="!start">
                <div class="bouncing" style="perspective: 500px;">
                    <div id="punch-container"
                        class="h-80 w-52 shadow-glow bg-gradient-to-b from-gray-700 to-gray-800 relative grid place-items-center rounded rounded-t-lg">
                        <button
                            class="active:translate-y-2.5 hover:scale-105 cursor-pointer w-32 h-32 rounded-full bg-gradient-to-b from-red-400 to-red-600 font-bold text-xl"
                            style="box-shadow: 0px 14px rgb(71, 10, 10);" @click="analyze">Press</button>
                    </div>
                    <div
                        class="w-[16.6rem] transform-3d -rotate-x-10 h-14 bg-gray-900 absolute -bottom-9 rounded-b-md rounded-t-sm translate-x-[-11%]">
                    </div>
                </div>
            </div>
            <ResultAhpSection v-else @onBack="backHome" :inputData="altData" />
        </Transition>
    </div>
</template>

<style scoped>
    #punch-container {
        transform-style: preserve-3d;
        transform: rotateX(45deg);
    }

</style>