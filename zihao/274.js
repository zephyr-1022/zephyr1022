document.addEventListener('DOMContentLoaded', () => {
    console.log("页面加载完成，初始化动效...");

    // 1. 实现滚动淡入效果
    const fadeElements = document.querySelectorAll('.content-block');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

    // 2. 图片随鼠标轻微晃动交互
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        document.addEventListener('mousemove', (e) => {
            let x = (window.innerWidth / 2 - e.pageX) / 30;
            let y = (window.innerHeight / 2 - e.pageY) / 30;
            avatar.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });
    }
});

// 获取页面中所有的卡片元素
const cards=document.querySelectorAll('.card');

// 初始化所有卡片为激活态
cards.forEach((card)=>{
    card.classList.add('is-active');
})

// 监听鼠标进入事件，使用捕获阶段确保事件能正确触发
document.addEventListener("mouseenter",(event)=>{
    // 查找最近的卡片父元素
    const card=event.target.closest(".card");
    if(card){
        // 移除所有卡片的激活状态
        cards.forEach((c)=>c.classList.remove('is-active'));
        // 为当前卡片添加激活状态
        card.classList.add("is-active");
    }
},true);

// 监听鼠标离开事件
document.addEventListener("mouseleave",(event)=>{
    const card=event.target.closest(".card");
    if(card){
        cards.forEach((c)=>c.classList.add("is-active"));
    }
},true);

const links = [
  "https://www.bilibili.com/video/BV1Xh4y1t7ZJ/", // 卡片1 → 那么近1.jpg
  "https://www.bilibili.com/video/BV1nc411u7XX/", // 卡片2 → 鲁.jpg
  "https://www.bilibili.com/video/BV1qx4y1d7bX/", // 卡片3 → love3.jpg
  "https://www.bilibili.com/video/BV1kG411o7KV/", // 卡片4 → king4.jpg
  "https://www.bilibili.com/video/BV1g34y1A7CU/", // 卡片5 → luv.jpg
  "https://www.bilibili.com/video/BV1qw411X7g6/"  // 卡片6 → 雪6.jpg
];

// 自动绑定：点第几张就打开第几个链接
document.querySelectorAll('.card').forEach((card, index) => {
  card.onclick = () => {
    if (links[index]) {
      window.open(links[index], '_blank');
    }
  };
});