<script setup lang="ts">
import type { ElementCardProps } from '../composables/ElementCard.vue';
import ElementCard from '../composables/ElementCard.vue';

        const elements : ElementCardProps[] = [
        {
            title: 'Titanium',
            number: 22,
            abbre: 'Ti',
            mass: "47.861"
        },
        {
            title: 'Ferrum',
            number: 26,
            abbre: 'Fe',
            mass: "55.845"
        },
        {
            title: 'Carbon',
            number: 6,
            abbre: 'C',
            mass: "12.011"
        }
    ];
    const emit = defineEmits(['on-choose']);

</script>

<template>
    <div class="flex flex-col md:flex-row gap-4 md:gap-10 xl:gap-32 justify-center items-center h-full p-8">
    <ElementCard v-for="item in elements" :key="item.abbre" v-bind="item" @on-clicked="(e) => {
        emit('on-choose', e);
    }" />
    </div>
</template>