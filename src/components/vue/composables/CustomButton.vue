<script setup lang="ts">

    const { type = 'primary' } = defineProps<{
        type?: string,
        link?: boolean
        url? : string,
    }>();
</script>

<template>
    <button v-if="!link"
        class="px-6 py-2 font-medium tracking-wide capitalize transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 min-w-32"
        :class="type">
        <slot />
    </button>
    <a v-else
        :href="url"
        class="px-6 py-2 font-medium tracking-wide capitalize transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 min-w-32 text-center"
        :class="type">
        <slot />
    </a>
</template>

<style scoped>

    .primary {
        background-color: #ab7c32;
    }

    .primary:hover {
        background-color: #743c1c;
    }

    .secondary {
        background-color: rgb(54, 135, 43);
    }

    .ghost {
        border: white 1px solid
    }

    .ghost:hover {
        background-color: rgb(207, 207, 207);
        color: black;
    }
</style>