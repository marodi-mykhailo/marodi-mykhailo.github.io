$(function(){
    $('.slider-wrapper').slick({
        nextArrow: '<button type="button" class="slider-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slider-btn slick-prev"></button>',
        autoplay:true,
        autoplaySpeed: 4000,
        mobileFirst: true,
        focusOnSelect: true,
        speed: 500,
        swipeToSlide: true,
    });

$('.slider2').slick({
    nextArrow: '<button type="button" class="slider-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slider-btn slick-prev"></button>',
    slidesToShow: 3,
    autoplay: false,
    arrows: false,
    responsive: [
        {
          breakpoint: 1110,
          settings: {
            arrows: true,

            slidesToShow: 2
          }
        },
        {
            breakpoint: 660,
            settings: {
              arrows: true,
  
              slidesToShow: 1
            }
        }
    ]
})

    $('.slider3').slick({
        nextArrow: '<button type="button" class="slider-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slider-btn slick-prev"></button>',
        slidesToShow: 4,
        autoplay: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1110,
              settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 2
              }
            },
            {
                breakpoint: 660,
                settings: {
                  arrows: true,
      
                  slidesToShow: 1
                }
            }
        ]
    })
    });
