<template>
    <div class="flex flex-col xl:gap-1 items-center text-center">
        <h3 class="xl:text-base text-sm">{{ criteria }}</h3>
        <p class="text-xl font-semibold">{{ title }}</p>
        <p class="text-xs">( {{ score }} )</p>
    </div>
</template>


<script setup lang="ts">
    defineProps<{
        criteria: string,
        title: string,
        score: number
    }>();

</script>