<template>
    <div class="am-user-login">
        <AmPopup
            width="320px"
            height="400px"
            :show-close-btn="false"
            :title="title"
            :show="show"
        >
            <div class="am-user-login__input">
                <AmInput
                    placeholder="用户名"
                    v-model:value="form.username"
                />
                <AmInput
                    name="password"
                    placeholder="密码"
                    type="password"
                    v-model:value="form.password"
                />
            </div>
            <div class="am-user-login__submit">
                <AmButton 
                    mode="primary"
                    @click="login"
                >登录</AmButton>
            </div>
        </AmPopup>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, reactive, inject } from 'vue';
const $message = inject('$message');

const emits = defineEmits(['login']);

const props = defineProps({
    title: {
        type: String,
        default: '登录',
    },
    show: {
        type: Boolean,
        default: false,
    }
})

const form = reactive({
    username: '',
    password: '',
});

const login = () => {
    if(!form.username || !form.password) {
        $message.fail('请输入账号密码');
        return;
    }
    emits('click-login', form);
}

</script>

<style lang="scss">
.am-user-login {
    &__input {
        padding-top: 40px;
        margin-bottom: 40px;
        .am-input {
            width: 100%;
            margin-bottom: 12px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    &__submit {
        width: 100%;
        .am-button {
            width: 100%;
        }
    }
}
</style>


<!-- <template>
    <div class="page-login">
        <div class="m-login">
            <div class="m-login__logo">
                <Logo />
            </div>
            <div class="m-login__title">
                <h5>登录</h5>
                <p>闪击后台登录</p>
            </div>

            <div class="m-login__input" :key="nowTab">
                <div class="m-login__input-item">
                    <AmInput
                        placeholder="账号"
                        v-model:value="form.username"
                    />
                </div>
                <div class="m-login__input-item">
                    <AmInput
                        name="password"
                        placeholder="密码"
                        type="password"
                        v-model:value="form.password"
                    />
                </div>
            </div>

            <div class="m-login__submit">
                <AmButton 
                    mode="primary"
                    @click="login"
                >登录</AmButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, inject } from 'vue';
import { noticeParentWindow } from '../../utils/index';
const $message = inject('$message');
const $request = inject('$request');
const form = reactive({
    account: '',
    password: '',
});

const login = async () => {
    const { username, password } = form;
    //  校空
    if (!username || !password) {
        $message.fail('请输入账号/密码')
        return
    }
    await $request.post({
        url: '/api/administrator/login',
        data: {
            username,
            password, 
        } 
    });
    $message.success('登录成功');
    noticeParentWindow({
        cmd: 'login-success',
    });
}
</script>

<style lang="scss">
html,body, #app {
    background: none;
    height: 100%;
}
.page-login {
    // background: rgba(0,0,0,1);
    width: 100%;
    display: flex;
    height: 100%;
    .m-login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 320px;
        min-height: 400px;
        padding-bottom: 64px;
        position: relative;
        background: #fff;
        border-radius: 2px;
        &__title {
            padding: 0 40px;
            margin-bottom: 32px;
            display: flex;
            flex-direction: column;
            h5 {
                font-size: 18px;
                font-weight: normal;
                margin-bottom: 4px;
            }
            p {
                font-size: 14px;
                color: #666;
            }
        }
        &__tab {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
            a {
                font-size: 14px;
                border-bottom: 2px solid transparent;
                height: 32px;
                display: inline-flex;
                align-items: center;
                margin-right: 16px;
                &.is-active {
                    font-size: 16px;
                    border-bottom: 2px solid #000;
                }
                &:last-child {
                    margin-right: 0;
                }
            }
        }
        &__input {
            width: 100%;
            padding: 0 40px;
            margin-bottom: 40px;
            &-item {
                width: 100%;
                margin-bottom: 12px;
                display: flex;
                .am-button {
                    margin-left: 8px;
                }
                .am-input {
                    flex: 1;
                    &.is-has-tip {
                        margin-bottom: -8px;
                    }
                }
                &:last-child {
                    margin-bottom: 0;
                }
                &.forgot-row {
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 0;
                }
            }
        }
        &__submit {
            width: 100%;
            padding: 0 40px;
            .am-button {
                width: 100%;
            }
        }
        &__law {
            padding: 0 40px;
            font-size: 12px;
            line-height: 18px;
            color: #999;
            position: absolute;
            bottom: 24px;
        }
    }
    .m-intro {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        p {
            font-size: 24px;
            line-height: 1.4;
            color: #fff;
            position: absolute;
            bottom: 48px;
            left: 24px;
            z-index: 2;
        }
        &:after {
            content: '';
            display: inline-block;
            width: 100%;
            height: 120%;
            background-image: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,1));
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
        }
    }
}
</style> -->