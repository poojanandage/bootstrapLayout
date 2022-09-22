
$('.carousel').carousel({
    interval: 2000,
    pause: false,
    wrap: false
  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
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
    },
    navText : ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>']
})
