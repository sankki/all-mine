<template>
    <div
        class="am-switch"
        :class="{
            ['is-active']: value,
            [`is-${scene}`]: scene,
        }"
        @click="handleClick"
    >
        <div class="am-switch__switch">
            <i></i>
        </div>
        <div class="am-switch__text" v-if="$slots.default">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:value', 'change']);
const props = defineProps({
    value: {
        type: Boolean,
        default: false,
    },
    scene: {
        type: String,
        default: 'light', // light dark
    }
})

const handleClick = () => {
    emit('update:value', !props.value);
    emit('change', props.value);
}
</script>

<style lang="scss">
.am-switch {
    display: inline-flex;
    align-items: center;
    height: 32px;
    user-select: none;
    cursor: pointer;
    &__switch {
        width: 40px;
        height: 20px;
        background: var(--c-bgdark);
        border-radius: 10px;
        transition: background .2s;
        position: relative;
        i {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            display: inline-flex;
            width: 50%;
            height: 100%;
            background: #fff;
            transition: transform .2s;
            border-radius: 50%;
            border: 2px solid var(--c-bgdark);
        }
    }
    &__text {
        margin-left: 4px;
        font-size: 14px;
    }
    &.is-active {
        .am-switch__switch {
            background: var(--c-success);
            i{
                transform: translateX(100%);
                border-color: var(--c-success);
            }
        }
    }

    &.is-dark {
        .am-switch__switch {
            background: var(--cd-bglight);
            i {
                background: #C2C2C2;
                border: 2px solid var(--cd-bglight);
            }
        }
        .am-switch__text {
            color: var(--cd-main);
        }
        &.is-active {
            .am-switch__switch {
                background: var(--cd-success);
                i{
                    background: #fff;
                    border-color: var(--cd-success);
                }
            }
        }
    }
}
</style>
