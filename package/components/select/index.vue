<template>
    <div class="am-select" :class="asClass">
        <AmDropdown
            :scene="scene"
            popover-box-class="am-select__popover"
            ref="dropdownCm"
        >
            <template v-slot:trigger>
                <!-- 默认文本 -->
                <p class="am-select__placeholder" 
                    v-if="!selectedItem || (multiple && !selectedItem.length)"
                >
                    {{ placeholder }}
                </p>
                <slot
                    name="selected"
                    :selectedItem="selectedItem"
                    v-if="$slots.selected"
                />
                <!-- 单选 -->
                <div
                    v-else-if="!multiple"
                    class="am-select__content am-select__content-alone"
                >
                    {{ selectedItem ? selectedItem.label : '' }}
                </div>
                <!-- 多选 -->
                <div
                    v-else
                    class="am-select__content am-select__content-multiple"
                >
                    <AmTag
                        v-for="item in selectedItem"
                        :key="item.value"
                        size="small"
                    >
                        {{ item.label }}
                    </AmTag>
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
    defineProps, ref, reactive, computed, defineEmits, provide, inject
} from 'vue';
import AmDropdown from '../dropdown/index.vue';

const props = defineProps({
    // 多选
    multiple: {
        type: Boolean,
        default: false,
    },
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
const dropdownCm = ref(null);
/**
 * options 
 * {
 *     value: 1,
 *     label: '选项名'  
 * }
 */
const options = reactive([]);
provide('options', options);
const dropdownShow = inject('dropdownShow');

const asClass = computed(() => ({
    [`is-${props.scene}`]: props.scene,
}));
const selectedItem = computed(() => {
    if (props.multiple) {
        // 多选
        const arr = options.filter(i => {
            return props.value.includes(i.value);
        })
        console.log('# arr', arr);
        return arr;
    }
    return options.find(i => i.value === props.value);
});
provide(
    'selectedItemValue',
    computed(() => props.value),
);

provide(
    'selectedItem',
    selectedItem
);

// 数据相关
provide('setValue', (option) => {
    if (props.multiple) {
        // 多选
        const newValue = props.value ? props.value : [];
        const index = newValue.findIndex((i) => i === option.value);
        if (index > -1) {
            newValue.splice(index, 1);
        } else {
            newValue.push(option.value);
        }
        emit('update:value',newValue);
        emit('change', newValue);
    } else {
        // 单选
        if(option.value === props.value) return;
        emit('update:value', option.value);
        emit('change', option.value);
        dropdownCm.value.hideDropdown();
    }
});
</script>

<style lang="scss">
.am-select {
    width: 230px;
    // 默认文本
    &__placeholder {
        width: calc(100% - 30px);
        color: var(--c-placeholder);
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
            flex: 1;
            padding-top: 2px;
            .am-tag {
                margin-bottom: 2px;
                margin-right: 2px;
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
    .am-dropdown__popover-inner {
        max-height: 240px;
        overflow: auto;
    }
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
