$(function() {
    $('.banner__slick').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: true,
        nextArrow: '<button type="button" class="banner__slick-arrow banner__slick-arrowright"><img src="images/an.svg" alt="arrown"></button>',
        prevArrow: '<button type="button" class="banner__slick-arrow banner__slick-arrowleft"><img src="images/ab.svg" alt="arrowb"></button>'
    });



    $(function () {
        $(".banner-section__slider").slick({
          dots: true,
          prevArrow:
            '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
          nextArrow:
            '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        });
    });
});