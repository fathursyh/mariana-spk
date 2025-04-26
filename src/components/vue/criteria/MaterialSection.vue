<script setup lang="ts">
    import { ref, type Ref } from 'vue';
    import MaterialCardWrapper from './MaterialCardWrapper.vue';
    import MaterialInfo from './MaterialInfo.vue';
    import type { ElementCardProps } from '../composables/ElementCard.vue';

    const component : Ref<ElementCardProps | null> = ref(null);
    const handleElement = (e : ElementCardProps) => {
        component.value = e;
    };

</script>

<template>
    <div class="w-full md:h-screen text-gray-50 bg-gradient-to-b from-base-color to-base-color2" data-aos="zoom-out">
        <Transition :name="component === null ? 'right' : 'left'" mode="out-in">
            <MaterialCardWrapper @on-choose="handleElement" v-if="component == null " />
            <MaterialInfo :element="component" v-else @on-exit="component = null" />
        </Transition>
    </div>
</template>