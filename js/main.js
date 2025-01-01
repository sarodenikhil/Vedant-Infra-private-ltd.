(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);










    // demo slider


    // const slider = document.querySelector('.slider');
    // const prevButton = document.querySelector('.prev');
    // const nextButton = document.querySelector('.next');

    // let scrollAmount = 0;

    // prevButton.addEventListener('click', () => {
    //   scrollAmount = Math.max(scrollAmount - 300, 0);
    //   slider.style.transform = `translateX(-${scrollAmount}px)`;
    // });

    // nextButton.addEventListener('click', () => {
    //   const maxScroll = slider.scrollWidth - slider.clientWidth;
    //   scrollAmount = Math.min(scrollAmount + 300, maxScroll);
    //   slider.style.transform = `translateX(-${scrollAmount}px)`;
    // });
  
