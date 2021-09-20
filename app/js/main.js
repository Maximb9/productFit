$(function() {
    $('.banner__slick').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: true,
        nextArrow: '<button type="button" class="banner__slick-arrow banner__slick-arrowright"><img src="images/an.svg" alt="arrown"></button>',
        prevArrow: '<button type="button" class="banner__slick-arrow banner__slick-arrowleft"><img src="images/ab.svg" alt="arrowb"></button>'
    });
})