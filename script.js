// 樱花飘落效果
document.addEventListener('DOMContentLoaded', () => {
    const sakuraBg = document.querySelector('.sakura-bg');
    if (!sakuraBg) return;

    function createPetal() {
        const petal = document.createElement('div');
        petal.style.position = 'absolute';
        petal.style.width = Math.random() * 10 + 5 + 'px';
        petal.style.height = petal.style.width;
        petal.style.background = 'rgba(255,182,193,0.6)';
        petal.style.borderRadius = '50%';
        petal.style.top = '-10px';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        sakuraBg.appendChild(petal);
    }

    for (let i = 0; i < 30; i++) {
        createPetal();
    }
});

// 飘落动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
