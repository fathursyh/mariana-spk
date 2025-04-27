<script setup lang="ts">
    import { ref } from 'vue';

    const isHover = ref(false);
    defineProps<{
        text: string
    }>()
</script>

<template>
    <div class="relative inline-block">
        <div @mouseenter="isHover = true" @mouseleave="isHover = false">
            <slot />
        </div>
        <p aria-label="tooltip"
            class="absolute flex items-center justify-center w-max p-3 px-8 text-black -translate-x-1/2 bg-gray-50 rounded-lg shadow-lg -top-18 left-1/2 dark:shadow-none shadow-gray-200 font-medium"
            v-if="isHover && text !== ''">
                {{ text }}
            <svg xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 absolute rotate-45 -translate-x-1/2 left-1/2 bottom-0.5 -mb-3 transform text-gray-50 fill-current"
                stroke="currentColor" viewBox="0 0 24 24">
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
            </svg>
        </p>
    </div>
</template>