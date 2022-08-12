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
$(window).on("scroll load", function () {
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
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $(".backToTop").fadeIn();
  } else {
    $(".backToTop").fadeOut();
  }
});
$(".backToTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 700);
});

$(".nav-buttom-res").click(function (e) {
  var menuItem = $(this);

  if (menuItem.attr("aria-expanded") === "true") {
    $(".carousel-indicators").css("z-index", 10001);
    console.log("true");
  } else if (menuItem.attr("aria-expanded") === "false") {
    $(".carousel-indicators").css("z-index", 1);
    console.log("false");
  }
});

// === nth-child(even) => project-detail page ===
$(".project-details-info:odd")
  .css({
    "background-color": "#212121",
    right: 0,
    left: "auto",
    top: "13%",
  })
  .addClass("fadeInRight");
$(".project-details-info:even").addClass("fadeInLeft");
$(".project-details-img:even").addClass("col-md-offset-4");

// === form validation ===

const formValidation = (event) => {
  event.preventDefault();

  // === error message ===

  const formValue = {
    name: "",
    email: "",
    message: "",
  };

  var errorNameMessage = "";
  var nameValidation = false;

  var errorEmailMessage = "";
  var emailValidtion = false;

  var errorMessageTextarea = "";
  var messageValidation = false;

  formValue.name = $("#name").val();
  formValue.email = $("#email").val();
  formValue.message = $("#message").val();

  // === email Regex ===
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //  === Name Input ===
  if (formValue.name === "") {
    errorNameMessage = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else if (formValue.name.length < 4) {
    errorNameMessage = "لطفا نام و نام خانوادگی معتبر وارد کنید";
  } else {
    errorNameMessage = "";
    nameValidation = true;
  }

  // === Email Input ===
  if (formValue.email === "") {
    errorEmailMessage = "لطفا ایمیل خود را وارد کنید";
  } else if (!formValue.email.match(validRegex)) {
    errorEmailMessage = "لطفا ایمیل معتبر وارد کنید";
  } else {
    errorEmailMessage = "";
    emailValidtion = true;
  }

  // === Message Input ===
  if (formValue.message === "") {
    errorMessageTextarea = "لطفا پیام خود را وارد کنید";
  } else {
    errorMessageTextarea = "";
    messageValidation = true;
  }

  $(".error-message-inputName").html(errorNameMessage);
  $(".error-message-inputEmail").html(errorEmailMessage);
  $(".error-message-inputMessage").html(errorMessageTextarea);

  if (nameValidation && emailValidtion && messageValidation) {
    console.log(
      "name:",
      formValue.name,
      "email:",
      formValue.email,
      "message:",
      formValue.message
    );
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");

    $(".form-status").html(`<div class="success-message dir-r text-right">
    پیام شما با موفقیت ارسال شد<i
      class="fa fa-check text-primary"
    ></i>
  </div>`);
  setTimeout(function(){
    if ($('.success-message').length > 0) {
      $('.success-message').remove();
    }
  }, 5000)
  }
};

const form = document.querySelector("#form");

$("#form").submit(formValidation);
