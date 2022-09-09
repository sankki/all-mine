import { createVNode, render } from 'vue';
import AmMessage from './index.vue';

const instances = [];

export default {
    install(app) {
        const showMessage = (arg) => {
            // 生成messgae的内容
            let initData = {
                content: 'this is a message',
                type: '',
                duration: 2000,
            };
            // 选择挂载的父元素
            let father = document.body;
            if (typeof arg === 'string') {
                initData.content = arg;
            } else {
                initData = { ...initData, ...arg };
                father = arg.father || father;
            }
            const container = document.createElement('div');
            const vm = createVNode(AmMessage, {
                ...initData,
            });
            render(vm, container);
            father.appendChild(container.firstElementChild);
            const instance = vm.component;
            instances.push(instance);
            instance.props.destroySelf = () => {
                const index = instances.findIndex((i) => i === instance);
                instances.splice(index, 1);
                render(null, container);
                container.remove();
            };
            // console.log('instance', instance);
            return instance;
        };
        const $message = (arg) => {
            showMessage(arg);
        };
        $message.success = (content) => {
            showMessage({
                content,
                type: 'success',
            });
        };
        $message.fail = (content) => {
            showMessage({
                content,
                type: 'fail',
            });
        };
        $message.info = (content) => {
            showMessage({
                content,
                type: 'info',
            });
        };
        $message.warning = (content) => {
            showMessage({
                content,
                type: 'warning',
            });
        };
        $message.closeMessage = (instance) => {
            if (instance) {
                instance.exposed.close();
            } else {
                instances.forEach((item) => {
                    item.exposed.close();
                });
            }
        };
        app.provide('$message', $message);
        window.$message = $message;
    },
};
