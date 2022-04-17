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
      slidesPerView:3,
      
    },
  },
});

new SmoothScroll('a[href*="#"]', {
  easing: "linear",
});

$(window).on("scroll load", function () {
  if (
    $("#about .container").offset().top - $(window).scrollTop() <
    $(window).height() - 200
  ) {
    $("#about .container").addClass("slideInRight").removeClass("invisible");
  }

  $("#authors .card").each(function () {
    if (
      $(this).offset().top - $(window).scrollTop() <
      $(window).height() - 200
    ) {
      $(this).addClass("zoomIn").removeClass("invisible");
    }
  });

  if (
    $("#contact form").offset().top - $(window).scrollTop() <
    $(window).height() - 200
  ) {
    $("#contact .col-lg-9").addClass("slideInRight").removeClass("invisible");
    $("#contact .col-lg-3").addClass("slideInUp").removeClass("invisible");
  }
});
