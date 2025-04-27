<script setup lang="ts">
    import { ref, type Ref } from 'vue';
    import MaterialCardWrapper from './MaterialCardWrapper.vue';
    import MaterialInfo from './MaterialInfo.vue';
    import type { ElementCardProps } from '../composables/ElementCard.vue';

    const component: Ref<ElementCardProps | null> = ref(null);
    const handleElement = (e: ElementCardProps) => {
        component.value = e;
    };

</script>

<template>
    <Transition :name="component === null ? 'right' : 'left'" mode="out-in" appear>
        <MaterialCardWrapper @on-choose="handleElement" v-if="component == null" />
        <MaterialInfo :element="component" v-else @on-exit="component = null" />
    </Transition>
</template>