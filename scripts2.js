
// 获取按钮
let backToTopBtn = document.getElementById("backToTopBtn");

// 当用户滚动到一定高度时显示按钮
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// 当用户点击按钮时滚动到页面顶部
backToTopBtn.onclick = function() {
    topFunction();
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


