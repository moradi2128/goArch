new WOW().init();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// === NanBar ===
$(window).on("scroll load", function() {
    if ($(window).scrollTop() > $(window).height()) {
        $(".navbar").addClass("navbar-glass");
        $(".navbar-container").addClass("menu-container");
        $(".logo-glass").css("display", "block");
        $(".backToTop").css("visibility", "visible");
    } else {
        $(".navbar").removeClass("navbar-glass ");
        $(".navbar-container").removeClass("menu-container");
        $(".logo-glass").css("display", "none");
        $(".backToTop").css("visibility", "hidden");
    }
});

// === Back To Top ===
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $(".backToTop").fadeIn();
    } else {
        $(".backToTop").fadeOut();
    }
});
$(".backToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 700);
});

$(".nav-buttom-res").click(function(e) {
    var menuItem = $(this);

    if (menuItem.attr("aria-expanded") === "true") {
        $(".carousel-indicators").css("z-index", 10001);
        console.log("true");
    } else if (menuItem.attr("aria-expanded") === "false") {
        $(".carousel-indicators").css("z-index", 1);
        console.log("false");
    }
});