<template>
    <div 
        class="am-dropdown" 
        :class="asClass" 
        v-clickoutside="clickOutside"
    >
        <!-- 下拉框内容 -->
        <AmPopover 
            :popover-box-class="`am-dropdown__popover is-${scene} ${popoverBoxClass}`"
            v-model:show="dropdownShow"
        >
            <template v-slot:trigger>
                <div 
                    class="am-dropdown__trigger"
                    :class="triggerClass"
                    @click="clickTrigger"
                >
                    <slot name="trigger"/>
                    <!-- 下拉按钮 -->
                    <div class="am-dropdown__trigger-icon">
                        <AmIcon name="caret-down" size="16px" />
                    </div>
                </div>
            </template>
            <div class="am-dropdown__popover-inner" @click="clickPopover">
                <slot />
            </div>
        </AmPopover>
    </div>
</template>

<script setup>
import {
    defineProps, ref, reactive, computed, defineEmits, provide, nextTick
} from 'vue';

const props = defineProps({
    // 触发器模式
    triggerMode: {
        type: String,
        default: 'default', // default 默认 none 无
    },
    scene: {
        type: String,
        default: 'light', // light dark
    },
    popoverBoxClass: {
        type: String,
        default: '',
    }
});

const dropdownShow = ref(false);

const isFocus = computed(() => dropdownShow.value);
const asClass = computed(() => ({
    'is-focus': isFocus.value,
    [`is-${props.scene}`]: props.scene,
}));
const triggerClass = computed(() => {
    return {
        [`is-${props.triggerMode}`]: true,
    }
})
// 显示隐藏
const clickTrigger = () => {
    dropdownShow.value = !dropdownShow.value;
};
let timer;
const clickOutside = () => {
    timer = setTimeout(() => {
        dropdownShow.value = false;
    },16);
};
const clickPopover = () => {
    if(timer) {
        clearTimeout(timer);
        timer = null;
    }
    dropdownShow.value = true;
}
</script>

<style lang="scss">
.am-dropdown {
    width: 100%;
    &__trigger {
        display: flex;
        &-icon {
            display: none;
        }
        &.is-default {
            height: 29px;
            width: 100%;
            border: 1px solid var(--c-border);
            box-shadow: 0 1px 0 0 var(--c-border);
            color: var(--c-main);
            background: var(--c-bg);
            user-select: none;
            cursor: pointer;
            transition: border 0s;
            font-size: 14px;
            display: flex;
            align-items: center;
            border-radius: 2px;
            padding-right: 24px;
            padding-left: 8px;
            position: relative;
            .am-dropdown__trigger-icon {
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                height: 24px;
                display: inline-flex;
                align-items: center;
                width: 24px;
                justify-content: center;
                transition: transform .2s;
            }
            &:after {
                content: '';
                display: inline-block;
                position: absolute;
                width: calc(100% + 2px);
                height: calc(100% + 2px);
                left: -1px;
                top: -1px;
                z-index: 1;
                outline: 2px solid rgba(0,0,0,0);
                border-radius: 2px;
                opacity: .2;
            }
        }
    }
    &.is-focus {
        .am-dropdown__trigger.is-default {
            border: 1px solid var(--c-primary);
            .am-dropdown__trigger-icon {
                transform: rotate(180deg);
                color: var(--c-primary);
            }
            &:after {
                outline-color: var(--c-primary);
            }
        }
    }
    &.is-dark {
        .am-dropdown__trigger {
            &.is-default {
                height: 30px;
                border: 1px solid var(--cd-border);
                box-shadow: 0 0px 0 0 var(--cd-border);
                background: var(--cd-bg);
                color: var(--cd-main);
            }
        }
        &.is-focus {
            .am-dropdown__trigger.is-default {
                border: 1px solid var(--cd-primary);
                .am-dropdown__trigger-icon {
                    color: var(--cd-primary);
                }
                &:after {
                    outline-color: var(--cd-primary);
                    opacity: .4;
                }
            }
        }
    }
}
.am-dropdown__popover {
    .am-popover__box-pop {
        background: var(--cd-bg);
    }
    &.is-dark {
        .am-popover__box-pop {
            background: var(--c-bg);
        } 
    }
}
</style>
