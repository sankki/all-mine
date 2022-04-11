<template>
    <div
        class="am-divider"
        :class="{
            [`is-${scene}`]: scene,
        }"
        :style="'margin:' + margin + ';font-size:' + size + ';'"
    >
        <span v-if="content">
            {{ content }}
        </span>
        <AmIcon v-else-if="icon" :name="icon" :size="size" />
        <i v-else-if="showLine" class="am-divider__line"></i>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    content: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: '14px',
    },
    margin: {
        type: String,
        default: '0 4px',
    },
    icon: {
        type: String,
    },
    showLine: {
        type: Boolean,
        default: false,
    },
    scene: {
        type: String,
        default: 'light',
    }
});
</script>

<style lang="scss">
.am-divider {
    display: inline-flex;
    color: var(--c-sup);
    align-items: center;
    &__line {
        width: 1px;
        height: 12px;
        background: var(--c-sup);
        display: inline-flex;
    }
    &.is-dark {
        color: var(--cd-sup);
        .am-divider__line {
            background: var(--cd-sup);
        }
    }
}
</style>
