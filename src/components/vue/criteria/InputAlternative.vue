<script setup lang="ts">
    import { ref } from 'vue';
    import ElementDropLeft from './ElementDropLeft.vue';
    import data from 'src/scripts/element.json';
    import ElementDropRight from './ElementDropRight.vue';
    import { applyDrag } from 'src/lib/utils/helpers';
    const dropContainer = ref([
        data, []
    ]);
        const onDrop = (i : number, dropResult : any) => {
        dropContainer.value[i] = applyDrag(dropContainer.value[i], dropResult);
    };
</script>

<template>
    <section class="w-full h-screen bg-gradient-to-b from-base-color2 to-base-color grid grid-cols-2">
        <ElementDropLeft :data="dropContainer[0]" :drop-handler="onDrop" />
        <ElementDropRight />
    </section>
</template>