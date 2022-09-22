<template>
    <div
        class="am-radio"
        :class="{
            ['is-active']: selected,
            [`is-${scene}`]: scene,
        }"
        @click.stop="handleClick"
    >
        <div class="am-radio__box">
            <transition name="am-radio-anime">
                <AmIcon 
                    name="check-2" 
                    v-show="selected" 
                    size="18px" 
                    color="#fff"
                />
            </transition>
        </div>
        <div class="am-radio__text" v-if="$slots.default">
            <slot />
        </div>
    </div>
</template>

<script setup>
import {
    defineProps, defineEmits, computed,
} from 'vue';
// import cloneDeep from 'lodash/cloneDeep';
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
        type: null,
    },
    // 不可选
    disabled: {
        type: Boolean,
        default: false,
    },
    // 值
    label: null,
    // 场景
    scene: {
        type: String,
        default: 'light', // light dark
    }
});

const selected = computed(() => {
    if (props.label !== undefined) {
        return props.value === props.label;
    }
    return props.value;
});

const handleClick = () => {
    if (props.label !== undefined) {
        emit('update:value', props.label);
        emit('change', props.label);
    } else {
        emit('update:value', !props.value);
        emit('change', props.value);
    }
};
</script>

<style lang="scss">
.am-radio {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    &__box {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
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
        color: var(--c-main);
    }

    .am-radio-anime-enter-active {
        animation: am-checkbox-in .2s;
    }
    .am-radio-anime-leave-active {
        animation: am-checkbox-in .2s reverse;
        animation-fill-mode: forwards;
    }
    @keyframes am-radio-in {
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
        .am-radio__box {
            border-color: var(--c-primary);
        }
    }
    &.is-active {
        .am-radio__box {
            background: var(--c-primary);
            border-color: var(--c-primary);
        }
    }

    &.is-dark {
        .am-radio__box {

        }
        .am-radio__text {
            color: var(--cd-main);
        }


    }
}
</style>
