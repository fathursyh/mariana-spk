<script setup lang="ts">
    import type { ElementCardProps } from '../composables/ElementCard.vue';
    import ElementCard from '../composables/ElementCard.vue';
    import data from 'src/scripts/element.json';
    const elements: ElementCardProps[] = data;
    const emit = defineEmits(['on-choose']);

</script>

<template>
    <div
        class="flex flex-row xl:flex-nowrap flex-wrap gap-4 md:gap-10 xl:gap-20 justify-center items-center xl:h-full h-screen p-8 pt-16 xl:pt-8">
        <ElementCard v-for="item in elements" :key="item.abbre" v-bind="item" @on-clicked="(e) => {
            emit('on-choose', e);
        }" />
    </div>
</template>