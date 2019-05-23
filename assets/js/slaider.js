$(document).ready(function () {
    $('.slaider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        dots: true,
    });
});

$(document).ready(function () {
    $('.slaider-bottom').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        dots: false,
        arrows:false,
    });
});