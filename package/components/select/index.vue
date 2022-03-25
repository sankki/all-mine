<template>
    <div class="am-select" :class="asClass" v-clickoutside="clickOutside">
        <!-- 下拉框内容 -->
        <AmPopover 
            popover-box-class="am-select-popover-box"
            v-model:show="dropDownShow"
        >
            <template v-slot:trigger>
                <!-- 选择框 -->
                <div
                    class="am-select__box"
                    @click="clickSelectBox"
                    ref="selectBox"
                >
                    <!-- 默认文本 -->
                    <p class="am-select__placeholder" v-if="!selectedItem">
                        {{ placeholder }}
                    </p>
                    <slot
                        name="selected"
                        :selectedItem="selectedItem"
                        v-if="$slots.selected"
                    />
                    <!-- 单选 -->
                    <div
                        v-else
                        class="am-select__content am-select__content-alone"
                    >
                        {{ selectedItem ? selectedItem.label : '' }}
                    </div>
                    <!-- 下拉按钮 -->
                    <div class="am-select__box-icon">
                        <AmIcon name="caret-down" size="16px" />
                    </div>
                </div>
            </template>
            <slot />
        </AmPopover>
    </div>
</template>

<script setup>
import {
    defineProps, ref, reactive, computed, defineEmits, provide,
} from 'vue';

const props = defineProps({
    // 默认文字
    placeholder: {
        type: String,
        default: '请选择',
    },
    // 所选值
    value: null,
});
const emit = defineEmits(['update:value', 'change']);

const dropDownShow = ref(false);
const options = reactive([]);
provide('options', options);

const isFocus = computed(() => dropDownShow.value);
const asClass = computed(() => ({
    'is-focus': isFocus.value,
}));
const selectedItem = computed(() => options.find((item) => {
    if (item.value === props.value) {
        return true;
    }
}));
provide(
    'selectedItemValue',
    computed(() => props.value),
);

// 显示隐藏
const clickSelectBox = () => {
    dropDownShow.value = !dropDownShow.value;
};
const clickOutside = () => {
    dropDownShow.value = false;
};
// 数据相关
provide('setValue', (option) => {
    emit('update:value', option.value);
    emit('change', option.value);
    dropDownShow.value = false;
});
</script>

<style lang="scss">
.am-select {
    width: 230px;
    // 输入框
    &__box {
        width: 100%;
        min-height: 29px;
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
        position: relative;
        &:hover {
            background: #f7f7f7;
        }
        &-icon {
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
        }
    }
    // 默认文本
    &__placeholder {
        width: calc(100% - 30px);
        color: var(--placeholder);
        padding-left: 8px;
        margin: 0;
    }
    // 内容
    &__content {
        width: calc(100% - 30px);
        padding-left: 8px;
        &-alone {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 1;
        }
        &-multiple {
            display: flex;
            flex-wrap: wrap;
            padding: 3px 0 3px 8px;
            flex: 1;
            .am-tag {
                margin: 2px 4px 2px 0;
            }
        }
    }
    // 下拉按钮
    &__down-icon {
        width: 30px;
        height: 100%;
        display: inline-flex;
        justify-content: center;
    }
    // 错误信息
    &__error-msg {
        font-size: 12px;
        color: red;
        position: absolute;
        left: 0;
        bottom: -20px;
        height: 20px;
        line-height: 20px;
    }
    // 修饰
    &.is-focus {
        .am-select__box {
            border: 1px solid #3375e5;
            outline: 2px solid #bfd0f0;
        }
    }
}
.am-select-popover-box {
    .am-popover__box-pop {
        max-height: 180px;
        background: rgba(0, 0, 0, 0.9);
    }
}
</style>
