<template>
    <div class="am-layout-title">
        <div class="am-layout-title__left">
            <div class="am-layout-title__title">
                {{ title }}
            </div>
        </div>
        <div class="am-layout-title__right">

        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
})

</script>

<style lang="scss">
.am-layout-title {
    margin-bottom: 16px;
    &__title {
        font: var(--f-16);
        color: var(--c-main);
        font-weight: bold;
    }
    &__left {
        display: flex;
        align-items: center;
    }
    &__right {
        display: flex;
        align-items: center;
    }
}

</style>