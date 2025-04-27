<script setup lang="ts">
    import { ref, type Ref } from 'vue';
    import MaterialCardWrapper from './MaterialCardWrapper.vue';
    import MaterialInfo from './MaterialInfo.vue';
    import type { ElementCardProps } from '../composables/ElementCard.vue';

    const component: Ref<ElementCardProps | null> = ref(null);
    const handleElement = (e: ElementCardProps) => {
        component.value = e;
    };
    const exitInfo = () => {
        component.value = null;
        document.body.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
</script>

<template>
    <Transition :name="component === null ? 'fade' : 'left'" appear>
        <MaterialCardWrapper @on-choose="handleElement" v-if="component === null" />
        <MaterialInfo :element="component" v-else @on-exit="exitInfo" />
    </Transition>
</template>