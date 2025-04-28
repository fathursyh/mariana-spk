<template>
    <div class="bg-green-300 h-full flex">
        <Container @drop="onDrop($event)"
            :orientation="'vertical'"
            :group-name="'element'"
            :tag="{value: 'div', props: {class: 'tempat'}}"
            @drag-start="startDrag"
        >
        
        <Draggable v-for="item in container" :key="item">
            <div class="w-52 h-32 bg-purple-300">
                <p>{{ item }}</p>
            </div>
        </Draggable>
        </Container>
    </div>
</template>

<script setup>
    import { Container, Draggable } from "vue-dndrop";
    import { applyDrag } from 'src/lib/utils/helpers';
    import { ref } from 'vue';


    const container = ref(['tes', 'keren']);
    const container2 = ref(['a']);
    const onDrop = (dropResult) => {
        container.value = applyDrag(container.value, dropResult);
    };
    const startDrag = (dragResult) => {
        console.log(dragResult);
    }

</script>