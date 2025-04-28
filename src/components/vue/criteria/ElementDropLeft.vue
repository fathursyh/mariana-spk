<template>
    <div class="w-full h-full flex flex-col justify-center items-center py-24 gap-4">
    <h4 class=" inline-block text-gray-50 p-3 px-6 rounded-full font-bold motion-safe:animate-pulse" :class="[full === true ? 'bg-red-600' : 'bg-green-600']">{{ full === true ? 'Max' : 'Drag to submarine!' }}</h4>
        <Container @drop="dropHandler(0, $event)"
            :orientation="'vertical'"
            :group-name="'element'"
            class="border-2 min-h-64 w-fit border-white border-dashed rounded p-4 relative"
             :get-child-payload="(index) => {
                return cardData[index]
             }"
        >
        <Draggable class="p-2" v-for="(item) in cardData" :key="item.title">
            <ElementCard :noAnimate="true" v-bind="item" :small="true" :class="[full === true ? 'active:cursor-not-allowed! cursor-no-drop!' : 'active:cursor-grabbing! cursor-grab!']" />
        </Draggable>
    </Container>
    </div>
</template>

<script setup>
    import { Container, Draggable } from "vue-dndrop";
    import ElementCard from "../composables/ElementCard.vue";
    const props = defineProps(['cardData', 'dropHandler', 'full']);

</script>