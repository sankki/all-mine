import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
import { sleep } from '@sankki/utils-common/esm/sleep';

const ulEl = document.createElement('ul');
const imgViewer = new Viewer(ulEl, {
    button: false,
    title: false,
});

export default {
    install(app) {
        const $viewer = {};
        $viewer.show = async ({
            imgs, // [{ url: 'xxxx.jpg' }, { url: 'xxxx.jpg' }]
            index, // 0
        }) => {
            // 清空ul
            var child = ulEl.lastElementChild;  
            while (child) { 
                ulEl.removeChild(child); 
                child = ulEl.lastElementChild; 
            };
            // 往ul塞入li
            imgs.forEach(img => {
                const { url } = img;
                const liEl = document.createElement('li');
                const imgEl = document.createElement('img');
                imgEl.src = url;
                liEl.append(imgEl);
                ulEl.append(liEl);
            });
            if(imgs.length <= 1) {
                imgViewer.options.navbar = false;
                imgViewer.navbar && (imgViewer.navbar.style.display = 'none');
            } else {
                imgViewer.options.navbar = true;
                imgViewer.navbar && (imgViewer.navbar.style.display = 'block');
            }
            imgViewer.navbar && (imgViewer.navbar.querySelector('.viewer-list').style.opacity = 0);
            imgViewer.update();
            imgViewer.view(index);
            await sleep(500);
            imgViewer.navbar && (imgViewer.navbar.querySelector('.viewer-list').style.opacity = 1);
        };
        $viewer.hide = () => {
            imgViewer.hide();
        }
        app.provide('$viewer', $viewer);
        window.$viewer = $viewer;
    },
};
