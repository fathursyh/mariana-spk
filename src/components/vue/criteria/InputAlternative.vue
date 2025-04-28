<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import ElementDropLeft from "./ElementDropLeft.vue";
    import data from "src/scripts/element.json";
    import ElementDropRight from "./ElementDropRight.vue";
    import { applyDrag } from "src/lib/utils/helpers";
    const dropContainer = ref([data, []]);
    const onDrop = (i: number, dropResult: any) => {
        if (!full.value) {
            dropContainer.value[i] = applyDrag(dropContainer.value[i], dropResult);
        }
        sessionStorage.setItem('alternative', JSON.stringify(dropContainer.value[1]));
    };
    const full = ref(false);
    const fullHandler = (value : boolean) => {
        full.value = value;
    };
    const resetContainer = () => {
        dropContainer.value.length = 0;
        dropContainer.value.push(data, []);
        sessionStorage.removeItem('alternative');
    };

    onMounted(()=>{
        sessionStorage.clear();
    });
</script>

<template>
    <section class="w-full min-h-screen bg-gradient-to-b from-base-color2 to-base-color grid grid-cols-1 xl:grid-cols-3">
        <ElementDropLeft :cardData="dropContainer[0]" :drop-handler="onDrop" :full="full" />
        <ElementDropRight :cardData="dropContainer[1]" :drop-handler="onDrop" @full="fullHandler" @reset="resetContainer" />
    </section>
</template>
