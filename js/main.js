AOS.init();

// nav scroll animation
$(window).scroll(function (scrollvalue) {
    if ($(window).scrollTop() > 0)
        $("nav.navbar").addClass("navbar-gb"),
        $(".titleitem").css("color","rgb(200, 200, 200)")
    else
        $("nav.navbar").removeClass("navbar-gb"),
        $(".titleitem").css("color","rgb(17, 17, 17)")

});

// 抓取頁面滾動位置
$(window).scroll(function () {
    let screenHeight = $(window).height();
    let scrollTop = $(window).scrollTop();
    let scrollEnd = $('#portfolio').offset().top - screenHeight * 0.5
    let scrollAbo = $('#about').offset().top;
    let scrollPro = $('#portfolio').offset().top;
    let scrollFooter = $('#end').offset().top;

    // GO TOP BTN
    let colorIN = "rgb(61, 61, 255)";
    let colorOUT = "rgb(200, 200, 200)";
    if (scrollTop < scrollAbo - 100) {
        $('.go').find('a').eq(0).css({ "color": colorIN, "border-bottom": "1px solid black" });
    } else {
        $('.go').find('a').eq(0).css({ "color": colorOUT, "border-bottom": "0px solid black" });
    }
    if (scrollTop < scrollPro - 30 && scrollTop > scrollAbo - 30) {
        $('.go').find('a').eq(1).css({ "color": colorIN, "border-bottom": "1px solid black" });
    } else {
        $('.go').find('a').eq(1).css({ "color": colorOUT, "border-bottom": "0px solid black" });
    }
    if (scrollTop < scrollFooter - screenHeight && scrollTop > scrollPro - 30) {
        $('.go').find('a').eq(2).css({ "color": colorIN, "border-bottom": "1px solid black" });
    } else {
        $('.go').find('a').eq(2).css({ "color": colorOUT, "border-bottom": "0px solid black" });
    }
    if (scrollTop > scrollFooter - screenHeight) {
        $('.go').find('a').eq(3).css({ "color": colorIN, "border-bottom": "1px solid black" });
    } else {
        $('.go').find('a').eq(3).css({ "color": colorOUT, "border-bottom": "0px solid black" });

    }
})


// 取得現在時間
function TimeRefresh() {
    let currentTime = new Date().toLocaleString();
    $('#time').text(currentTime);
}

$(document).ready(function () {

    TimeRefresh();
    setInterval(TimeRefresh, 1000);
})

// PS作品輪播
function initSwiper() {
    /* 
    id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    要抓取 id "#comment-swiper"
    */
    const swiper = new Swiper("#comment-swiper", {
        /*  預設要顯示幾個卡片 */
        slidesPerView: 1,
        /* 斷點設定 */
        breakpoints: {
            /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
            992: {
                slidesPerView: 3
            },
            /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
            768: {
                slidesPerView: 2
            },
            /* 更小時都顯示 1 欄 */
            0: {
                slidesPerView: 1
            }
        },
        /* 卡片元素的間隔 */
        spaceBetween: 16,
        pagination: {
            /* 我想將分頁圓點綁在哪個 class */
            el: ".swiper-pagination",
            /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
            clickable: true
        }
    });
}

/* 觸發自己定義的函式 */
initSwiper();