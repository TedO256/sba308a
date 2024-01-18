// carousel.js
const addCityToCarousel = function(city, temperature) {
    $('.slick-carousel').slick('slickAdd', `<div>${city}<br>Temperature: ${temperature.toFixed(2)}°F</div>`);
};

$('.slick-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
});

$('.slick-prev').click(function(){
    $('.slick-carousel').slick('slickPrev');
});

$('.slick-next').click(function(){
    $('.slick-carousel').slick('slickNext');
});