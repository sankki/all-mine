<template>
    <div class="am-layout-admin">
        <div class="am-layout-admin__header">
            <div class="am-layout-admin__header-left">
                <slot name="headerleft"></slot>
            </div>
            <div class="am-layout-admin__header-right">
                <slot name="headerright"></slot>
            </div>
        </div>
        <div class="am-layout-admin__body">
            <div class="am-layout-admin__navbar">
                <slot name="nav"></slot>
            </div>
            <div class="am-layout-admin__main">
                <div class="am-layout-admin__bread">
                    <slot name="bread"></slot>
                </div>
                <div class="am-layout-admin__container">
                    <slot name="container"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.am-layout-admin {
    height: 100%;
    overflow-y: auto;
    background: var(--c-bglight);
    &__header {
        width: 100%;
        height: 48px;
        background: #212121;
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
        &-left {
            display: flex;
            align-items: center;
            color: var(--cd-main);
        }
        &-right {
            display: flex;
            align-items: center;
            color: var(--cd-main);
        }
    }
    &__body {
        flex: 1;
        display: flex;
        position: relative;
    }
    &__navbar {
        position: sticky;
        width: 200px;
        max-height: 100vh;
        min-height: calc(100vh - 48px);
        top: 0;
        background: #fff;
        border-right: 1px solid var(--c-border);
    }
    &__main {
        flex: 1;
    }
    &__bread {
        height: 40px;
        background: #fff;
        border-bottom: 1px solid var(--c-border);
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        padding: 0 16px;
        font: var(--f-14);
        color: var(--c-main);
    }
}
</style>