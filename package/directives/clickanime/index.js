/* eslint-disable */
export default {
    mounted(el, binding) {
        setTimeout(() => {
            const style = window.getComputedStyle(el, null);
            const timeMatch = style.transitionDuration.match(/[0-9\.]+(?=s)/g);
            if(!timeMatch){
                return false;
            }
            const maxTime = timeMatch.reduce((num1, num2) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                return num1 > num2 ? num1 : num2
            })*1000;

            let isDown = false;
            let isUp = true;
            let timeEnd = false;
            let handlerEnd = true;
            let timer = null;
            let timer2 = null;
            el.addEventListener('mousedown', ()=> {
                if(!handlerEnd) {
                    return;
                }
                el.classList.add(binding.value);
                handlerEnd = false;
                isDown = true;
                isUp = false;
                timeEnd = false;
                timer = setTimeout(() => {
                    timer = null;
                    timeEnd = true;
                    moveLeave();
                }, maxTime)
            })
            el.addEventListener('mouseleave', () => {
                isDown = false;
                isUp = true;
                moveLeave();
            })
            el.addEventListener('mouseup', () => {
                isDown = false;
                isUp = true;
                moveLeave();
            })
            const moveLeave = () => {
                if(isUp && timeEnd) {
                    el.classList.remove(binding.value);
                    timer2 = setTimeout(() => {
                        handlerEnd = true;
                        timer2 = null;
                    }, maxTime)
                }
            }
        }, 0);
    },
};
