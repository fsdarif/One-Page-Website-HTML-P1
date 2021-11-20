$(document).ready(function(){
    $('#nav').onePageNav({
        currentClass: 'current'
    });
    $('.projects-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });
    $('.video-popup').magnificPopup({
        type:'iframe'
    });
    $('.counter-in').counterUp();

    $('.testimonials').slick({
        infinite: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        slidesToScroll: 1,
        dots: true,
        loop: true,
        autoplay: true,
    });
});







$(window).on('scroll', function(){
    if($(this).scrollTop() >30 ){
        $('.header-area').addClass('sticky');
    } else{
        $('.header-area').removeClass('sticky');
    }
})