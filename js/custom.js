/* global $ */

// Navbar Scroll Handler

    $(window).scroll(function () {
        $("nav").toggleClass("scrolled", $(this).scrollTop () > 800);
    });