$(function() {
    $('.banner__slick').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: true,
        nextArrow: '<button type="button" class="banner__slick-arrow banner__slick-arrowright"><img src="images/an.svg" alt="arrown"></button>',
        prevArrow: '<button type="button" class="banner__slick-arrow banner__slick-arrowleft"><img src="images/ab.svg" alt="arrowb"></button>'
    });



    $('.slider__computer').slick({
        infinite: true,
        speed: 1000,
        dots: true,
        slidesToShow: 1,
        arrows: true,
        nextArrow: '<button type="button" class="slider__computer-arrow slider__computer-arrowright"><img src="images/an.svg" alt="arrown"></button>',
        prevArrow: '<button type="button" class="slider__computer-arrow slider__computer-arrowleft"><img src="images/ab.svg" alt="arrowb"></button>'
    });
})