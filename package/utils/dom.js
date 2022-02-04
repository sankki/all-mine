// 获取元素处于哪个滚动视图里
export function getScrollBoxOfEl(el) {
    const els = [window];
    let thisEl = el;
    let end = false;
    while (!end) {
        thisEl = thisEl.parentElement;
        const style = window.getComputedStyle(thisEl, null);
        if (
            style.overflow === 'scroll' || style.overflow === 'auto'
            || style.overflowY === 'scroll' || style.overflowY === 'auto'
            || style.overflowX === 'scroll' || style.overflowX === 'auto'
        ) {
            els.push(thisEl);
        }
        if (thisEl === document.body) {
            end = true;
        }
    }
    return els;
}

// 监听元素变化
export function observeElResize(el, callBack) {
    const ro = new ResizeObserver(() => {
        callBack();
    });
    ro.observe(el);
    return ro;
}

// 取消监听元素变化
export function offObserveElResize(el, ro) {
    ro.unobserve(el);
}

// 元素 - 计算隐藏元素宽度
export function getHiddenDomRect(el) {
    // 获取旧元素宽高
    const oldElStyle = window.getComputedStyle(el, null);
    const oldWidth = oldElStyle.width;
    // 克隆元素
    const cloneEl = el.cloneNode(true);
    cloneEl.style.cssText = `
        z-index: -999;
        position: fixed;
        top: 0;
        left: 0;
        width: ${oldWidth};
        width: max-content;
        visibility: hidden;`;
    el.parentNode.append(cloneEl);
    const cloneElRect = window.getComputedStyle(cloneEl, null);
    const obj = {
        height: window.parseFloat(cloneElRect.height),
        width: window.parseFloat(cloneElRect.width),
    };
    cloneEl.remove();
    return obj;
}
