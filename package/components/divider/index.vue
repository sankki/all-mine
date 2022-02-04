<template>
    <div
        class="am-divider"
        :style="'margin:' + margin + ';font-size:' + size + ';color:' + color"
    >
        <span v-if="content">
            {{ content }}
        </span>
        <AmIcon v-else-if="icon" :name="icon" :size="size" />
        <i v-else-if="showLine" class="am-divider__line"></i>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    content: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: '14px',
    },
    margin: {
        type: String,
        default: '0 4px',
    },
    color: {
        type: String,
        default: '#999',
    },
    icon: {
        type: String,
    },
    showLine: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss">
.am-divider {
    display: inline-flex;
    color: #e5e5e5;
    align-items: center;
    &__line {
        width: 1px;
        height: 12px;
        background: #ccc;
        display: inline-flex;
    }
}
</style>
