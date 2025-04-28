<template>
    <article class="h-full w-full grid xl:grid-cols-4 transition-colors duration-700 delay-200" :class="[bgColor]">
        <div class="text-black flex xl:justify-end justify-center items-center h-[40vh] xl:h-full w-screen xl:w-full pt-14 xl:pt-0" @click="$emit('on-exit')">
            <Transition name="right">
                <img loading="lazy" :src="image" class="mix-blend-multiply object-cover w-[80%] bouncing" :class="[element.abbre === 'Ti' && 'w-[100%] xl:translate-x-10']" :alt="element.title" v-if="isLoaded" />
            </Transition>
        </div>
        <Transition name="left">
            <aside class="col-span-3 bg-gray-50 flex flex-col gap-8 md:items-end justify-center xl:p-18 p-8 shadow-glow z-20" v-if="isLoaded">
                <div class="xl:w-[80%] w-full text-black">
                    <h2 class="font-semibold text-2xl pb-1 mb-2 border-b border-gray-600">{{ element.title }}</h2>
                    <p>{{ element.info?.short }}</p>
                    <ul class="font-medium list-disc list-outside mt-2">
                        Strong points:
                        <li v-for="item in element.info?.strong" :key="item" class="font-normal ms-8">
                            {{ item }}
                        </li>
                    </ul>
                    <ul class="font-medium list-disc list-outside mt-2">
                        Weak points:
                        <li v-for="item in element.info?.weak" :key="item" class="font-normal ms-8">
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
    import { computed, onMounted, ref } from "vue";
    import { type ElementCardProps } from "../composables/ElementCard.vue";
    import CustomButton from "../composables/CustomButton.vue";

    const emit = defineEmits(["on-exit"]);
    const props = defineProps<{
        element: ElementCardProps;
    }>();

    const image = computed(() => {
        if (props.element.abbre === 'C') return "carbon.jpg";
        if (props.element.abbre === 'Fe') return "ferum.avif";
        if (props.element.abbre === 'Ti') return "titanium.webp";
        if (props.element.abbre === 'Al') return "https://www.johndesmond.com/wp-content/uploads/2020/02/aluminium-al-part-of-a-series-on-metals-commonly-alloyed-with-stainless-steel-to-form-varying-grades-of-material_01.jpg";
        if (props.element.abbre === 'Ni') return "https://www.cohenusa.com/wp-content/uploads/2020/09/nickel-ore-resized.jpeg";
    });

    const isLoaded = ref(false);
    const bgColor = computed(() => {
        if (isLoaded.value) {
            return 'element'
        } else {return ''}
    });

    onMounted(() => {
        const timer = setTimeout(() => {
            isLoaded.value = true;
            clearTimeout(timer);
        }, 400);
    });
</script>
