$(function(){
    $('.slider__box').slick({
        prevArrow: '<img src="img/arrow-left.svg" alt="arrow-left" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="img/arrow-right.svg" alt="arrow-right" class="slider__arrow slider__arrow-right">',
        responsive:[
            {
                breakpoint: 481,
                settings:{
                    arrows: false
                }
            }
        ]
    });

    $('.menu-btn').on('click', function (){
        $('.menu__list').toggleClass('active');
    });
});