$(function(){function e(){return window.pageYOffset||document.documentElement.scrollTop}$(".hamburger-menu").on("click",function(){$(".bar").toggleClass("animate")}),$(".hamburger-menu").click(function(){$(".content-menu").toggleClass("content-menu-active")}),$(".hamburger-menu").click(function(){$(".overlay-menu-hgm").toggleClass("overlay-menu-hgm-active")}),$(".overlay-menu-hgm").click(function(){$(".overlay-menu-hgm").toggleClass("overlay-menu-hgm-active")}),$(".overlay-menu-hgm").click(function(){$(".content-menu").toggleClass("content-menu-active")}),$(".item-hbg").click(function(){$(".overlay-menu-hgm").toggleClass("overlay-menu-hgm-active")}),$(".item-hbg").click(function(){$(".content-menu").toggleClass("content-menu-active")}),$(".item-hbg").click(function(){$(".bar").toggleClass("animate")}),$(".overlay-menu-hgm").click(function(){$(".bar").toggleClass("animate")});$(window).scroll(function(){e()>=300?$(".header").addClass("shrink"):$(".header").removeClass("shrink")})}),$(document).ready(function(){$(".owl-carousel").owlCarousel({items:1,loop:!0,dots:!0,nav:!1,margin:10,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},768:{items:3,margin:10},1e3:{items:4,margin:10}}})});