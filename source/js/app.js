$(function() {
  $(".hamburger-menu").on("click", function() {
    $(".bar").toggleClass("animate");
  });

  $(".hamburger-menu").click(function() {
    $(".content-menu").toggleClass("content-menu-active");
  });

  $(".hamburger-menu").click(function() {
    $(".overlay-menu-hgm").toggleClass("overlay-menu-hgm-active");
  });

  $(".overlay-menu-hgm").click(function() {
    $(".overlay-menu-hgm").toggleClass("overlay-menu-hgm-active");
  });

  $(".overlay-menu-hgm").click(function() {
    $(".content-menu").toggleClass("content-menu-active");
  });

  $(".item-hbg").click(function() {
    $(".overlay-menu-hgm").toggleClass("overlay-menu-hgm-active");
  });

  $(".item-hbg").click(function() {
    $(".content-menu").toggleClass("content-menu-active");
  });

  $(".item-hbg").click(function() {
    $(".bar").toggleClass("animate");
  });

  $(".overlay-menu-hgm").click(function() {
    $(".bar").toggleClass("animate");
  });

  var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $(".header").addClass("shrink");
    } else {
      $(".header").removeClass("shrink");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

$(document).ready(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3,
        margin: 10
      },
      1000: {
        items: 4,
        margin: 10
      }
    }
  });
});
