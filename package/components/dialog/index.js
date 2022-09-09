import { createVNode, render } from 'vue';
import AmDialog from './index.vue';

const instances = [];

export default {
    install(app) {
        const showDialog = (options) => {
            console.log('options', options)
            /**
             * options 参数
             * options.title   标题
             * options.content 主体内容
             * options.isHtml  是否是html内容
             * options.cancelText 取消按钮内容
             * options.confirmText 确定按钮内容
             */
            const container = document.createElement('div');
            const vm = createVNode(AmDialog, {
                ...options,
            });
            console.log('1', vm, container);
            render(vm, container);
            console.log('1.1');
            document.body.appendChild(container.firstElementChild);
            const instance = vm.component;
            instances.push(instance);
            console.log('2');
            // 摧毁dom
            instance.props.destroySelf = () => {
                const index = instances.findIndex((i) => i === instance);
                instances.splice(index, 1);
                render(null, container);
                container.remove();
            };
            // console.log('instance', instance);
            return new Promise((resolve, reject) => {
                instance.props.confirm = resolve;
                instance.props.cancel = reject;
            });
        };
        const $dialog = showDialog;

        app.provide('$dialog', $dialog);
    },
};
