<template>
    <div class="w-full h-full flex flex-col justify-center items-center py-24 gap-4">
        <h4 class="hidden xl:inline-block text-gray-50 p-3 px-6 rounded-full font-bold motion-safe:animate-pulse"
            :class="[full === true ? 'bg-red-600' : 'bg-green-600']">{{ full === true ? 'Max' : 'Drag to submarine!' }}
        </h4>
        <h4 class=" inline-block xl:hidden text-gray-50 p-3 px-6 rounded-full font-bold motion-safe:animate-pulse"
            :class="[full === true ? 'bg-red-600' : 'bg-green-600']">{{ full === true ? 'Max' : 'Touch 3 of 5!' }}</h4>
        <Container @drop="dropHandler(0, $event)" :orientation="'vertical'" :group-name="'element'"
            class="border-2 min-h-64 w-fit border-white border-dashed rounded p-4 relative" :get-child-payload="(index) => {
                return cardData[index]
            }">
            <Draggable class="p-2" v-for="(item) in cardData" :key="item.title">
                <ElementCard :noAnimate="true" v-bind="item" :small="true"
                    :class="[full === true ? 'active:cursor-not-allowed! cursor-no-drop!' : 'active:cursor-grabbing! cursor-grab!']"
                    @touchstart="switchSides(0, 1, item)" />
            </Draggable>
        </Container>
        <svg v-if="full" class="w-10 h-10 text-gray-800 dark:text-white animate-bounce" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m8 7 4 4 4-4m-8 6 4 4 4-4" />
        </svg>

    </div>
</template>

<script setup>
    import { Container, Draggable } from "vue-dndrop";
    import ElementCard from "../composables/ElementCard.vue";
    const props = defineProps(['cardData', 'dropHandler', 'full', 'switchSides']);

</script>