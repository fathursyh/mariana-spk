<template>
    <div class="w-full h-full flex flex-col justify-center items-center py-24 col-span-2 gap-3">
        <YellowSubmarine :class="{'bouncing' : !dragged && cardData.length > 0}">
            <Container @drop="dropHandler(1, $event)"
                :orientation="'horizontal'"
                :group-name="'element'"
                class="border-2 h-full w-full border-white border-dashed rounded p-4"
                :get-child-payload="(index) => {
                    return cardData[index]
                 }"
                 @drag-start="() => {
                    dragged = true;
                 }"
                 @drag-end="dragged = false"
                 @drag-leave="() => {
                    $emit('full', false);
                 }"
                 @drop-ready="() => {
                    if (cardData.length > 2) {
                        $emit('full', true);
                    }
                 }"
                drop-class="drop-preview"
            >
            
            <Draggable class="p-2" v-for="(item) in cardData" :key="item.title">
             <article class="w-20 h-20 bg-red-800 text-white rounded-full grid place-items-center font-bold text-xl cursor-grab! active:cursor-grabbing!">
                {{ item.abbre }}
             </article>
            </Draggable>
            </Container>
        </YellowSubmarine>
        <button class="text-white bg-red-500 block py-2 px-6 rounded-xl capitalize font-medium cursor-pointer hover:scale-105" v-show="cardData.length > 0" @click="$emit('reset')">reset</button>

    </div>
</template>

<style>
    .drop-preview {
        background-color: rgb(230, 73, 73);
    }
</style>

<script setup>
    import { Container, Draggable } from "vue-dndrop";
    import YellowSubmarine from "./YellowSubmarine.vue";
    import { ref } from "vue";
    const props = defineProps(['cardData', 'dropHandler']);
    defineEmits(['full', 'reset']);
    const dragged = ref(false);
</script>