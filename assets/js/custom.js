$(document).ready(function(){
    
    // slider active
    $(".sliders").owlCarousel({
        'items':1,
        'autoplay': true,
        'loop': true
    });
    // Testimonial slide active
    $(".testimonials").owlCarousel({
        'items':3,
        'loop': true,
        'autoplay': true,
        'nav': false,
        'dots': false,
        'margin': 15,
        'center': true
    });

    // counter active
    $('.counter').counterUp();


});

  // Sticy Menu
  $(window).load(function(){
    $(this).on('scroll', function(){
        if($(this).scrollTop() > 40){
            $('.menu-area').addClass('sticky');
        }
        else{
            $('.menu-area').removeClass('sticky');
        }
    });
});