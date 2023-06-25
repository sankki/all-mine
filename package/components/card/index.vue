<template>
    <div 
        class="am-card"
        :class="{
            [`is-${size}`]: size,
            [`is-border`]: border,
        }"    
    >
        <div class="am-card__hd" v-if="title">
            <div class="am-card__hd-left">
                <span class="am-card__title">{{ title }}</span>
                <slot name="hdleft"></slot>
            </div>
            <div class="am-card__hd-right">
                <slot name="hdright"></slot>
            </div>
        </div>
        <div class="am-card__bd">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    size: {
        type: String,
        default: 'medium', // large medium small
    },
    border: {
        type: Boolean,
        default: false,
    }
})


</script>

<style lang="scss">
.am-card {
    background: #fff;
    &__title {
        font: var(--f-14);
    }
    &__hd {
        // min-height: 40px;
        display: flex;
        justify-content: space-between;
        &-left {
            padding: 0 16px;
            display: flex;
            align-items: center;
        }
        &-right {
            padding: 0 16px;
            display: flex;
            align-items: center;
        }
    }
    &__bd {
        padding: 16px;
    }
    &.is-small {
        .am-card__hd-left {
            padding: 4px 16px;
        }
        .am-card__hd-right {
            padding: 4px 16px;
        }
        .am-card__bd {
            padding: 16px;
            padding-top: 8px;
        }
    }

    &.is-medium {
        .am-card__hd-left {
            padding: 4px 20px;
        }
        .am-card__hd-right {
            padding: 4px 20px;
        }
        .am-card__bd {
            padding: 20px;
            padding-top: 12px;
        }
    }
    &.is-large {
        .am-card__title {
            font: var(--f-16);
        }
        .am-card__hd-left {
            padding: 8px 24px;
        }
        .am-card__hd-right {
            padding: 8px 24px;
        }
        .am-card__bd {
            padding: 24px;
            padding-top: 16px;
        }
    }

    &.is-border {
        border: 1px solid var(--c-border);
    }
}
</style>