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

    const switchSides = (prev : number, to : number, data : any) => {
        if (prev === 0 && dropContainer.value[1].length > 2) {
            full.value = true;
            return;
        } else {
            full.value = false;
        }
        dropContainer.value[to].push(data);
        dropContainer.value[prev] = dropContainer.value[prev].filter(item => item.title !== data.title);
        sessionStorage.setItem('alternative', JSON.stringify(dropContainer.value[1]));
    }

    onMounted(()=>{
        sessionStorage.clear();
    });
</script>

<template>
    <section id="input-alt" class="w-full min-h-screen bg-gradient-to-b from-base-color2 to-base-color grid grid-cols-1 xl:grid-cols-3 overflow-x-hidden">
        <ElementDropLeft :cardData="dropContainer[0]" :drop-handler="onDrop" :full="full" :switchSides="switchSides" data-aos="fade-down" data-aos-delay="400" />
        <ElementDropRight :cardData="dropContainer[1]" :drop-handler="onDrop" @full="fullHandler" @reset="resetContainer" :switchSides="switchSides" data-aos="fade-left" data-aos-delay="200" />
    </section>
</template>
