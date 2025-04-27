<template>
    <article class="h-full w-full grid xl:grid-cols-4 transition-colors duration-700 delay-200" :class="[bgColor]">
        <div class="text-black flex xl:justify-end justify-center items-center h-[40vh] xl:h-full w-screen xl:w-full pt-14 xl:pt-0" @click="$emit('on-exit')">
            <ElementCard v-bind="element" />
        </div>
        <Transition name="left" mode="out-in">
            <aside class="col-span-3 bg-gray-50 flex flex-col gap-8 md:items-end justify-center xl:p-18 p-8 shadow-glow" v-if="isLoaded" >
                <div class="xl:w-[80%] w-full text-black">
                    <h2 class="font-semibold text-2xl pb-1 mb-2 border-b border-gray-600">{{ element.title }}</h2>
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
                <CustomButton type="secondary" class="shadow" @click="$emit('on-exit')">Okay!</CustomButton>
            </aside>
        </Transition>
    </article>
</template>

<style scoped>
@media only screen and (min-width: 1300px) {
    aside {
        clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
}
</style>

<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import ElementCard, { type ElementCardProps } from '../composables/ElementCard.vue';
    import CustomButton from '../composables/CustomButton.vue';

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
