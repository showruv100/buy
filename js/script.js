$(document).ready(function(){

    // product active 
 $('.product-slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    // testimonial active 
$('.testimonial-active').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.scrolltop').fadeIn();
    }else{
        $('.scrolltop').fadeOut();
    }
});
    $('.scrolltop').click(function(){
        $('html, body').animate({
            scrollTop:0
        },1000);
    })


    // sticky 
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
         $(".header").removeClass("scroll-header");
        }else{
         $(".header").addClass("scroll-header");
        }
       });
       var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });

});

