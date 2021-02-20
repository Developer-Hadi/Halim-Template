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

    // Portfolio filtering
    // init Isotope
    var $grid = $('.portfolio-items').isotope();
    // filter items on li click
    $('.portfolio-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    //filter items menu active
    $('.portfolio-menu').on('click','li', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

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