$(document).ready(function(){
    // slider active
    $(".sliders").owlCarousel({
        'items':1,
        'loop': true,
        'autoplay': true,
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