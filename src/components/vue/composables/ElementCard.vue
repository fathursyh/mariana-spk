<script setup lang="ts">
    export interface ElementCardProps {
        title?: string,
        number?: number,
        abbre?: string,
        mass?: string,
        info?: {
            short?: string,
            strong?: string[],
            weak?: string[]
        },
        noAnimate?: boolean,
        small?: boolean
    }
    const props = defineProps<ElementCardProps>();
    defineEmits(['on-clicked']);
</script>

<template>
    <article v-if="!small" class="md:w-52 md:h-52 h-36 w-36 bg-white rounded-xl hover:shadow-glow text-black flex flex-col items-center justify-center border-4 border-gray-800 font-medium hover:scale-110 transition-all duration-300 cursor-pointer active:scale-90" :class="{'bouncing': !noAnimate}" @click="$emit('on-clicked', {...props})">
        <h4 class="md:text-xl text-lg font-semibold">{{ title }}</h4>
        <p class="text-sm md:text-base">{{ number }}</p>
        <p class="md:text-6xl text-3xl font-bold">{{ abbre }}</p>
        <span class="md:text-sm text-xs">{{ mass }}</span>
    </article>
    <article v-else class="md:w-32 md:h-32 h-24 w-24 bg-white rounded-xl hover:shadow-glow text-black flex flex-col items-center justify-center border-4 border-gray-800 font-medium hover:scale-110 transition-all duration-300 cursor-pointer active:scale-90" :class="{'bouncing': !noAnimate}" @click="$emit('on-clicked', {...props})">
        <h4 class="md:text-base text-sm font-semibold">{{ title }}</h4>
        <p class="text-xs md:text-sm">{{ number }}</p>
        <p class="md:text-3xl text-xl font-bold">{{ abbre }}</p>
        <span class="text-xs">{{ mass }}</span>
    </article>
</template>
