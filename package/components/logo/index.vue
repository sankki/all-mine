<template>
    <div class="am-logo">
        <!-- icon + sankki + light -->
        <img v-if="mode === 'light-all'" src="//cos.sankki.com/c/20230502233419/logo-light-all.svg" />

        <!-- icon + sankki + dark -->
        <img v-else-if="mode === 'dark-all'" src="//cos.sankki.com/c/20230502233458/logo-dark-all.svg" />

        <!-- icon + light -->
        <img v-else-if="mode === 'light-icon'" src="//cos.sankki.com/c/20230502233526/logo-light-icon.svg" />

        <!-- icon + dark -->
        <img v-else-if="mode === 'dark-icon'" src="//cos.sankki.com/c/20230502233550/logo-dark-icon.svg" />

        <!-- icon + black -->
        <img v-else-if="mode === 'black'" src="//cos.sankki.com/c/20230502233615/logo-light-black.svg" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    mode: {
        type: String,
        default: 'light-all', // light-all dark-all light-icon dark-icon black
    }
})
</script>

<style lang="scss">
.am-logo {
    display: inline-flex;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>