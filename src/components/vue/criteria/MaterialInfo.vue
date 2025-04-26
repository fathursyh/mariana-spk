<template>
    <article class="h-full w-full grid grid-cols-4 transition-colors duration-700 delay-200" :class="[bgColor]">
        <div class="text-black flex justify-end items-center" @click="$emit('on-exit')">
            <ElementCard v-bind="element" />
        </div>
        <Transition name="left" mode="out-in">
            <aside class="relative text-black col-span-3 bg-gray-50 flex items-center justify-end p-18 shadow-glow" v-if="isLoaded" >
                <button aria-label="exit" class="absolute right-4 top-4 bg-red-800 rounded-full p-2 cursor-pointer active:scale-90 z-40" @click="$emit('on-exit')">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
                    />
                </svg>
            </button>
                <p class="w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi ex numquam ea earum quisquam iure suscipit tenetur quaerat alias at eaque deserunt, est, autem dolorem? Iure a quo voluptas cupiditate ratione obcaecati eius ipsa est velit, libero illo adipisci. Vero reprehenderit libero doloremque ut velit neque non facilis placeat iure consequatur dignissimos, exercitationem autem distinctio nulla est. Officia veritatis eaque, deserunt animi perferendis rerum tenetur quia magni reprehenderit fugiat itaque ratione porro voluptatibus distinctio iste, vero ea, eveniet voluptate.
                </p>
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

    defineEmits(['on-exit']);
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
