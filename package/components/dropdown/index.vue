<template>
    <div 
        class="am-dropdown" 
        :class="asClass" 
        v-clickoutside="clickOutside"
    >
        <!-- 下拉框内容 -->
        <AmPopover 
            popover-box-class="am-dropdown-box"
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
            <div class="am-dropdown__popover" @click="clickPopover">
                <slot/>
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
    }
});

const dropdownShow = ref(false);

const isFocus = computed(() => dropdownShow.value);
const asClass = computed(() => ({
    'is-focus': isFocus.value,
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
    width: 230px;
    &__trigger {
        &-icon {
            display: none;
        }
        &.is-default {
            width: 100%;
            border: 1px solid #e0e0e0;
            box-shadow: 0 1px 0 0 #ddd;
            user-select: none;
            cursor: pointer;
            transition: border 0s;
            font-size: 14px;
            display: flex;
            align-items: center;
            border-radius: 4px;
            background: #fff;
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
        }
    }
    &.is-focus {
        .am-dropdown__trigger.is-default {
            border: 1px solid #3375e5;
            outline: 2px solid #bfd0f0;
            .am-dropdown__trigger-icon {
                transform: rotate(180deg);
            }
        }
    }
}
.am-dropdown-box {
    .am-popover__box-pop {
        background: rgba(0, 0, 0, 0.95);
    }
}
</style>
