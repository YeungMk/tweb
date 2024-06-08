document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let counter = 0;
    const size = carouselImages[0].clientWidth;

    function moveCarousel() {
        if (counter >= carouselImages.length) {
            counter = 0;
        }
        if (counter < 0) {
            counter = carouselImages.length - 1;
        }
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    nextBtn.addEventListener('click', () => {
        counter++;
        moveCarousel();
    });

    prevBtn.addEventListener('click', () => {
        counter--;
        moveCarousel();
    });

    setInterval(() => {
        counter++;
        moveCarousel();
    }, 3000);
});

// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

