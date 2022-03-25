<template>
    <div 
        class="am-list-item"
        :class="{
            'is-selected': selected,
        }"
    >
        <slot />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    // 选中
    selected: {
        type: Boolean,
    }
})

</script>

<style lang="scss">
.am-list-item {
    font-size: 14px;
    padding: 0 16px;
    height: 28px;
    display: flex;
    align-items: center;
    color: #666;
    cursor: pointer;
    border-radius: 2px;
    &.is-selected {
        background: #e5e5e5;
        color: #333;
        font-weight: bold;
    }
    &:not(.is-selected):hover {
        background: #eee;
    }
}
</style>
