<template>
    <div
        class="am-checkbox"
        :class="{
            ['is-active']: selected,
        }"
        @click.stop="handleClick"
    >
        <div class="am-checkbox__box">
            <transition name="am-checkbox-anime">
                <AmIcon 
                    name="check-2" 
                    v-show="selected" 
                    size="18px" 
                    color="#fff"
                />
            </transition>
        </div>
        <div class="am-checkbox__text" v-if="$slots.default">
            <slot />
        </div>
    </div>
</template>

<script setup>
import {
    defineProps, defineEmits, computed,
} from 'vue';
import { cloneDeep } from 'lodash';
import AmIcon from '../icon/index.vue';

const emit = defineEmits([
    'update:value',
    'input',
    'change',
    'focus',
    'blur',
    'enter',
]);

const props = defineProps({
    // 所选值（布尔或数组）
    value: {
        type: [Boolean, Array],
    },
    // 不可选
    disabled: {
        type: Boolean,
        default: false,
    },
    // 值
    label: null,
});

const selected = computed(() => {
    if (Array.isArray(props.value)) {
        return props.value.find((item) => {
            if (item === props.label) {
                return true;
            }
            return false;
        });
    }
    if (props.label) {
        return props.value === props.label;
    }
    return props.value;
});

const handleClick = () => {
    if (Array.isArray(props.value)) {
        let inIndex = -1;
        const newValue = cloneDeep(props.value);
        newValue.forEach((item, index) => {
            if (item === props.label) {
                inIndex = index;
            }
        });
        if (inIndex >= 0) {
            newValue.splice(inIndex, 1);
        } else {
            newValue.push(props.label);
        }
        emit('update:value', newValue);
        emit('change', newValue);
    } else if (props.label) {
        emit('update:value', props.label);
        emit('change', props.label);
    } else {
        emit('update:value', !props.value);
        emit('change', props.value);
    }
};
</script>

<style lang="scss">
.am-checkbox {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    &__box {
        width: 16px;
        height: 16px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        border: 1px solid var(--c-border);
        transition: border .2s, background .2s;
        background: #fff;
        .am-icon {
            opacity: 1;
            transform: scale(1);
            color: #fff;
        }
    }
    &__text {
        margin-left: 6px;
        font-size: 14px;
    }

    .am-checkbox-anime-enter-active {
        animation: am-checkbox-in .2s;
    }
    .am-checkbox-anime-leave-active {
        animation: am-checkbox-in .2s reverse;
        animation-fill-mode: forwards;
    }
    @keyframes am-checkbox-in {
        from {
            opacity: 0;
            transform: scale(0);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    // 状态
    &:hover {
        .am-checkbox__box {
            border-color: var(--c-primary);
        }
    }
    &.is-active {
        .am-checkbox__box {
            background: var(--c-primary);
            border-color: var(--c-primary);
        }
    }
}
</style>
