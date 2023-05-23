<template>
    <div 
        class="am-logo"
        :class="{
            'has-href': href,
        }"   
        @click="clickLogo" 
    >
        <!-- icon + sankki + light -->
        <img v-if="mode === 'light-all'" src="//cos.sankki.com/c/20230504155314/logo-light-all.svg" />

        <!-- icon + sankki + dark -->
        <img v-else-if="mode === 'dark-all'" src="//cos.sankki.com/c/20230504155332/logo-dark-all.svg" />

        <!-- icon + light -->
        <img v-else-if="mode === 'light-icon'" src="//cos.sankki.com/c/20230504145646/logo-light-icon.svg" />

        <!-- icon + dark -->
        <img v-else-if="mode === 'dark-icon'" src="//cos.sankki.com/c/20230504145728/logo-dark-icon.svg" />

        <!-- icon + black -->
        <img v-else-if="mode === 'black'" src="//cos.sankki.com/c/20230504145659/logo-light-black.svg" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    mode: {
        type: String,
        default: 'light-all', // light-all dark-all light-icon dark-icon black
    },
    href: {
        type: String,
    }
})

const clickLogo = () => {
    if(props.href) {
        window.open(props.href);
    }
}

</script>

<style lang="scss">
.am-logo {
    display: inline-flex;
    img {
        width: 100%;
        height: 100%;
    }
    &.has-href {
        cursor: pointer;
    }
}
</style>