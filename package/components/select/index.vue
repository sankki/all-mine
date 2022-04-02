<template>
    <div class="am-select" :class="asClass">
        <AmDropdown
            :scene="scene"
            popover-box-class="am-select__popover"
        >
            <template v-slot:trigger>
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
            </template>
            <template v-slot>
                <slot />
            </template>
        </AmDropdown>
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
    scene: {
        type: String,
        default: 'light', // light dark
    },
});
const emit = defineEmits(['update:value', 'change']);

const options = reactive([]);
provide('options', options);

const asClass = computed(() => ({
    [`is-${props.scene}`]: props.scene,
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
    // 默认文本
    &__placeholder {
        width: calc(100% - 30px);
        color: var(--placeholder);
        margin: 0;
        width: 100%;
    }
    // 内容
    &__content {
        width: calc(100% - 30px);
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
}

.am-select__popover {
    .am-option {
        user-select: none;
        padding: 5px 8px;
        font-size: 13px;
        line-height: 24px;
        position: relative;
        cursor: pointer;
        padding-right: 24px;
        color: var(--cd-main);
        &__check {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 2px;
            margin: auto;
            color: var(--cd-success);
        }
        &:hover {
            background: rgba(255,255,255,.1);
        }
    }
    &.is-dark {
        .am-option {
            color: var(--c-main);
            &__check {
                color: var(--c-success);
            }
            &:hover {
                background: rgba(0,0,0,.1);
            }
        }
    }
}
</style>
