// 原有：导师 打字机效果
const title = document.querySelector('.title');
const text = "导师";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        title.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 300);
    } else {
        title.innerHTML = text + '<span class="cursor">|</span>';
    }
}

window.addEventListener('load', () => {
    title.textContent = '';
    typeWriter();
});

// 光标闪烁
const style = document.createElement('style');
style.textContent = `
.cursor {
    animation: blink 1s infinite;
    color: #ffc0cb;
}
@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}
`;
document.head.appendChild(style);

// 新增：动态樱花飘落特效
(function(){
    let sakuraCount = 45;
    let sakura = [];
    const body = document.querySelector('body');

    for(let i = 0; i < sakuraCount; i++){
        let leaf = document.createElement('div');
        leaf.style.cssText = `
            position:fixed;
            top:-10%;
            background:#ffcfe0;
            border-radius:50%;
            opacity:${Math.random()*0.6+0.4};
            z-index:-1;
        `;
        let size = Math.random()*8 + 4;
        leaf.style.width = size + 'px';
        leaf.style.height = size + 'px';
        body.appendChild(leaf);
        sakura.push({
            el:leaf,
            x:Math.random()*100,
            y:Math.random()*100 - 100,
            speedX:Math.random()*0.4 - 0.2,
            speedY:Math.random()*1.2 + 0.6
        });
    }

    function run(){
        sakura.forEach(item=>{
            item.x += item.speedX;
            item.y += item.speedY;
            if(item.y > 105){
                item.y = -10;
                item.x = Math.random()*100;
            }
            item.el.style.left = item.x + '%';
            item.el.style.top = item.y + '%';
        })
        requestAnimationFrame(run);
    }
    run();
})();
