<template>
    <svg class="am-icon" aria-hidden="true" :style="style">
        <use :xlink:href="'#' + name"></use>
    </svg>
</template>

<script setup>
import { defineProps, computed, toRefs } from 'vue';

const props = defineProps({
    name: {
        type: String,
        default: 'add',
    },
    size: {
        type: String,
        default: '14px',
    },
    color: {
        type: String,
        default: '',
    },
});
const style = computed(() => {
    const { size, color } = toRefs(props);
    const sty = {};
    if (size) {
        sty.fontSize = size.value;
    }
    if (color) {
        sty.color = color.value;
    }
    return sty;
});
</script>

<style lang="scss" scoped>
.am-icon {
    width: 1em;
    height: 1em;
    vertical-align: -1em;
    fill: currentColor;
    overflow: hidden;
}
</style>
