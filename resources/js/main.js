// const owl = $('.testimonial_section-carousel');
// owl.owlCarousel();
// $('#prev-btn').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// $('#next-btn').click(function() {
//     owl.trigger('prev.owl.carousel', [300]);
// })


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        // autoWidth: true,
        loop:true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true
    });

    $('.owl-button-1').click(function(){
        $('.owl-prev').trigger('click');
    });
    $('.owl-button-2').click(function(){
        $('.owl-next').trigger('click');
    });
  });

function openNav() {
    document.getElementById("myNav").style.width= "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width= "0%";
}

