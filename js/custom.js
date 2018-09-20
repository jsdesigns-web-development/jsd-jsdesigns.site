/* global $ */
// Navbar Scroll Handler

    $(window).scroll(function () {
        $("nav").toggleClass("scrolled", $(this).scrollTop () > 50);
        $(".nav-link").toggleClass("scrolled", $(this).scrollTop () > 50);
    });

    $(window).ready( function () {
        if ($(window).width() < 514) {
            $("html").removeClass("fixed-top");
        }
    });
