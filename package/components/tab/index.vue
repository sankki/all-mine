<template>
    <!-- TAB -->
    <div 
        class="am-tab"
        :class="{
            [`is-${mode}`]: mode,
            [`is-${scene}`]: scene,
        }"    
    >
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

const props = defineProps({
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
    mode: {
        type: String,
        default: 'default', // default 默认 line 线型  
    },
    // 场景
    scene: {
        type: String,
        default: 'light', // light dark
    },
});

const emit = defineEmits(['update:value', 'change']);
const clickTab = (item) => {
    if(item.value === props.value) return;
    emit('update:value', item.value);
    emit('change', item.value);
};
</script>

<style lang="scss">
.am-tab {
    display: inline-flex;
    // background: #f5f5f5;
    border-radius: 3px;
    // border: 1px solid #ddd;
    // padding: 4px;
    // 默认风格
    &.is-default {
        .am-tab__item {
            height: 30px;
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
            transition: background .2s;
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
                // &::before {
                //     opacity: 1;
                // }
                background: rgba(0,0,0,.07);
            }
            &:hover:not(.is-active) {
                // background: var(--c-bglight);
                background: rgba(0,0,0,.04);
            } 
        }
    }

    // 线形风格
    &.is-line {
        .am-tab__item {
            height: 30px;
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
            // overflow: hidden;
            transition: background .1s, color .1s;
            span {
                position: relative;
                z-index: 2;
            }
            &::before {
                content: '';
                display: inline-flex;
                width: 20px;
                height: 2px;
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                top: initial;
                margin: auto;
                background: var(--c-primary);
                // background: var(--c-bglight);
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
                color: var(--c-main);
                font-weight: bold;
                background: none;
            } 
        }
    }

    // 暗系
    &.is-dark {
        &.is-default {
            .am-tab__item {
                color: var(--cd-sub);
                transition: background .1s;
                &::before {
                    background: var(--cd-bglight);
                }
                &.is-active {
                    color: var(--cd-main);
                    &::before {
                        opacity: 1;
                    }
                }
                &:hover:not(.is-active) {
                    background: var(--cd-bglight);
                } 
            }
        }
        &.is-line {
            .am-tab__item {
                color: var(--cd-sub);
                &::before {
                    background: var(--cd-primary);
                }
                &.is-active {
                    color: var(--cd-main);
                }
                &:hover:not(.is-active) {
                    color: var(--cd-main);
                } 
            }
        }
    }
}
</style>
