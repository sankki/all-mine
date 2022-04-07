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
            <Icon
                v-if="item.icon"
                :name="item.icon"
                :size="item.iconSize"
            ></Icon>
            <span v-else>{{ item.name }}</span>
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
                name: '',
                icon: '',
                iconSize: '',
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
        &.is-active {
            background: #eee;
            color: var(--c-main);
            font-weight: bold;
            // background: var(--primary);
            // color: #fff;
            // border-color: #ddd;
        }
        &:hover:not(.is-active) {
            // background: #eee;
        }
    }
}
</style>
