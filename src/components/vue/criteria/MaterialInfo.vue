<template>
    <article class="h-full w-full grid grid-cols-4 transition-colors duration-700 delay-200" :class="[bgColor]">
        <div class="text-black flex justify-end items-center" @click="$emit('on-exit')">
            <ElementCard v-bind="element" />
        </div>
        <Transition name="left" mode="out-in">
            <aside class="text-black col-span-3 bg-gray-50 flex items-center justify-end p-18 shadow-glow" v-if="isLoaded" >
                <div class="w-[80%]">
                    <h2 class="font-semibold text-2xl">{{ element.title }}</h2>
                    <p>{{ element.info.short }}</p>
                    <ul class="font-medium list-disc list-outside mt-2">Strong points:
                        <li v-for="item in element.info.strong" :key="item" class="font-normal ms-8">
                            {{ item }}
                        </li>
                    </ul>
                    <ul class="font-medium list-disc list-outside mt-2">Weak points:
                        <li v-for="item in element.info.weak" :key="item" class="font-normal ms-8">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                
            </aside>
        </Transition>
    </article>
</template>

<style scoped>
    aside {
        clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);

    }
</style>

<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import ElementCard, { type ElementCardProps } from '../composables/ElementCard.vue';

    const emit = defineEmits(['on-exit']);
    const props = defineProps<{
        element: ElementCardProps;
    }>();

    const isLoaded = ref(false);
    const bgColor = computed(() => {
        if (isLoaded.value) {
            return props.element.abbre === 'Ti' ? 'element1' : (props.element.abbre === 'Fe' ? 'element2' : 'element3')
        } else {
            return '';
        }
    });

    onMounted(() => {
        const timer = setTimeout(() => {
            isLoaded.value = true;
            clearTimeout(timer);
        }, 400);
    });

</script>
