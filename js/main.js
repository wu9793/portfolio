AOS.init();

// nav scroll animation
$(window).scroll(function (scrollvalue) {
    if ($(window).scrollTop() > 0)
        $("nav.navbar").addClass("navbar-gb")
    else
        $("nav.navbar").removeClass("navbar-gb")

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