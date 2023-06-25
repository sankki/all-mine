<template>
    <div class="am-layout-bar">
        <div class="am-layout-bar__left">
            <slot name="left" />
        </div>
        <div class="am-layout-bar__right">
            <slot name="right" />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.am-layout-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
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