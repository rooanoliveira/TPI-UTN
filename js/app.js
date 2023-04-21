$(document).ready(function() {
    const navbar = $('.navbar');
    $(window).scroll(function() {
        if ($(window).innerWidth() >= 768) {
            if ($(window).scrollTop() > 50) {
                navbar.addClass('navbar-scrolled');
            } else {
                navbar.removeClass('navbar-scrolled');
            }
        }
    });
  });