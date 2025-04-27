<script setup lang="ts">
import type { ElementCardProps } from '../composables/ElementCard.vue';
import ElementCard from '../composables/ElementCard.vue';

        const elements : ElementCardProps[] = [
        {
            title: 'Titanium',
            number: 22,
            abbre: 'Ti',
            mass: "47.861",
            info: {
                short: 'Titanium alloys adalah logam paduan berbasis titanium (Ti) yang dikombinasikan dengan unsur lain seperti aluminium (Al) dan vanadium (V) untuk meningkatkan sifat mekaniknya.',
                strong: ["Kekuatan spesifik tinggi: kuat, tapi sangat ringan.", "Tahan korosi luar biasa: tidak mudah berkarat, bahkan di air laut dalam.", "Tahan suhu tinggi: tetap kuat di lingkungan ekstrem."],
                weak: ["Sangat mahal dibanding baja biasa.", "Sulit difabrikasi (perlu teknik khusus untuk pengelasan dan pembentukan)."],
            }
        },
        {
            title: 'Ferrum',
            number: 26,
            abbre: 'Fe',
            mass: "55.845",
            info: {
                short: 'Baja (steel) adalah paduan besi (Fe) dengan karbon (C) dan kadang unsur lain seperti nikel (Ni) dan krom (Cr) untuk meningkatkan kekuatan.',
                strong: ["Murah dan tersedia banyak.", "Mudah difabrikasi (dipotong, dilas, dibentuk).", "Kuat tekan tinggi, bisa tahan tekanan ekstrem."],
                weak: ["Lebih berat dibanding titanium.", "Tahan korosi lebih rendah: butuh perlindungan tambahan (coating, cathodic protection)."],
            }
        },
        {
            title: 'Carbon',
            number: 6,
            abbre: 'C',
            mass: "12.011",
            info: {
                short: 'Komposit adalah material yang terdiri dari dua atau lebih bahan berbeda yang digabungkan untuk membentuk material baru dengan sifat unggul.',
                strong: ["Ringan banget, jauh lebih ringan daripada baja dan titanium.", "Kekuatan tarik sangat tinggi.", "Tahan korosi alami."],
                weak: ["Mahal untuk produksi massal.", "Brittle (mudah retak kalau terkena benturan keras).", "Sulit untuk menahan tekanan kompresi ekstrem. Biasanya dipakai di kedalaman laut sedang, bukan kedalaman ekstrem seperti Palung Mariana."],
            }
        }
    ];
    const emit = defineEmits(['on-choose']);

</script>

<template>
    <div class="flex flex-col md:flex-row gap-4 md:gap-10 xl:gap-32 justify-center items-center xl:h-full h-screen p-8">
    <ElementCard v-for="item in elements" :key="item.abbre" v-bind="item" @on-clicked="(e) => {
        emit('on-choose', e);
    }" />
    </div>
</template>