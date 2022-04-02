<template>
    <div class="am-form">
        <slot />
    </div>
</template>

<script setup>
import { defineProps, provide } from 'vue';

const props = defineProps({
    labelWidth: {
        type: String,
        default: '80px',
    },
    position: {
        type: String,
        default: 'left',
    },
    scene: {
        type: String,
        default: 'light', // light dark
    }
});
provide('form', {
    props,
});
</script>

<style lang="scss">
.am-form {
    >.am-form-item {
        margin-bottom: 16px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
