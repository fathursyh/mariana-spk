<template>
    <div class="w-full h-full flex justify-center items-center py-24">
        <Container @drop="dropHandler(0, $event)"
            :orientation="'vertical'"
            :group-name="'element'"
            class="border-2 h-full w-fit border-white border-dashed rounded p-4"
        >
        
        <Draggable class="p-2" v-for="item in data" :key="item.title">
            <ElementCard :noAnimate="true" class="h-24!" />
        </Draggable>
        </Container>
    </div>
</template>

<script setup>
    import { Container, Draggable } from "vue-dndrop";
    import ElementCard from "../composables/ElementCard.vue";
    const props = defineProps(['data', 'dropHandler']);

</script>