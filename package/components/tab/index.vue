<template>
    <!-- TAB -->
    <div class="am-tab">
        <div
            :class="{
                'is-active': item.value === value,
            }"
            class="am-tab__item"
            v-for="(item, index) in tabs"
            :key="index"
            @click="clickTab(item)"
        >
            <span>{{ item.label }}</span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    tabs: {
        type: Array,
        default: () => [
            {
                value: '',
                label: '',
            },
        ],
    },
    value: null,
});

const emit = defineEmits(['update:value']);
const clickTab = (item) => {
    emit('update:value', item.value);
};
</script>

<style lang="scss">
.am-tab {
    display: inline-flex;
    // background: #f5f5f5;
    border-radius: 3px;
    // border: 1px solid #ddd;
    // padding: 4px;
    &__item {
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        cursor: pointer;
        font-size: 13px;
        padding: 0 8px;
        // border: 1px solid rgba(0,0,0,0);
        color: var(--c-sub);
        position: relative;
        overflow: hidden;
        transition: background .1s;
        span {
            position: relative;
            z-index: 2;
        }
        &::before {
            content: '';
            display: inline-flex;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: var(--c-bglight);
            opacity: 0;
            transition: opacity .1s;
        }
        &.is-active {
            // background: var(--c-primary);
            color: var(--c-main);
            font-weight: bold;
            // background: var(--primary);
            // color: #fff;
            // border-color: #ddd;
            &::before {
                opacity: 1;
            }
        }
        &:hover:not(.is-active) {
            background: var(--c-bglight);
        }
    }
}
</style>
