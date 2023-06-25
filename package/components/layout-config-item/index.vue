<template>
    <div class="am-layout-config-item">
        <div class="am-layout-config-item__left">
            <div class="am-layout-config-item__title">
                <slot name="sub" v-if="$slots.title"/>
                <template v-else-if="title">
                    {{ title }}
                </template>
            </div>
            <div class="am-layout-config-item__sub">
                <slot name="sub" v-if="$slots.sub"/>
                <template v-else-if="sub">
                    {{ sub }}
                </template>
            </div>
        </div>
        <div class="am-layout-config-item__right" v-if="$slots.default">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    sub: String,

})

</script>

<style lang="scss">
.am-layout-config-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    &:last-child {
        margin-bottom: 0;
    }
    &__left {

    }
    &__right {
        padding-top: 8px;
    }
    &__title {
        font: var(--f-14);
        color: var(--c-main);
    }
    &__sub {
        font: var(--f-13);
        color: var(--c-sub);
    }
}

</style>