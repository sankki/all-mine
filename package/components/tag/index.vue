<template>
    <div
        class="am-tag"
        :class="{
            ['is-' + mode]: mode,
            ['is-' + size]: size,
            ['is-' + color]: color,
            ['is-' + scene]: scene,
        }"
        :style="tagStyle"
    >
        <slot />
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    // 模式
    mode: {
        type: String,
        default: 'default', // default 默认 fill 实心的 plain 空心的 
    },
    // 颜色
    color: {
        type: String,
        default: '', // #f00 primary red orange yellow green blue purple pink black  
    },
    // 尺寸
    size: {
        type: String,
        default: 'medium', // large 40px medium 32px small 24px mini 14px
    },
    // 暗色模式
    scene: {
        type: String,
        default: 'light', // light dark
    }
});

const tagStyle = computed(() => {
    const color = /rgba|\#/.test(props.color) ? 
    props.color : 
    (props.scene === 'light' ?
    `var(--c-${props.color})` : `var(--cd-${props.color})`);
    const bgColor = props.scene === 'light' ? `var(--c-bg)` : `var(--cd-bg)`;
    const borderColor = props.scene === 'light' ? `var(--c-border)` : `var(--cd-border)`;
    const textColor = props.scene === 'light' ? `var(--c-main)` : `var(--cd-main)`;
    if(props.mode === 'default') {
        return {
            background: bgColor,
            borderColor: borderColor,
            color: textColor,
        }

    }
    if(props.mode === 'fill') {
        return {
            borderColor: color,
            background: color,
            color: '#fff',
        }
    }else if(props.mode === 'plain') {
        return {
            borderColor: color,
            background: bgColor,
            color: color,
        }
    }
    return {};
})

</script>

<style lang="scss">
.am-tag {
    display: inline-flex;
    align-items: center;
    line-height: 20px;
    font-size: 14px;
    padding: 2px 6px;
    background: var(--c-bglight);
    color: var(--c-main);
    border: 1px solid var(--c-border);
    border-radius: 2px;
    // 尺寸
    &.is-large {
        height: 32px;
        line-height: 32px;
        padding: 0 8px;
        font-size: 16px;
        min-width: 32px;
    }
    &.is-medium {
        height: 24px;
        line-height: 24px;
        padding: 0 6px;
        min-width: 24px;
        font-size: 14px;
    }
    &.is-small {
        font-size: 13px;
        height: 20px;
        line-height: 20px;
        padding: 0 4px;
        min-width: 20px;
    }
    &.is-mini {
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        padding: 0 2px;
        min-width: 16px;
        border-radius: 1px;
    }

}
</style>
