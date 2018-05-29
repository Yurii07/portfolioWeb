  $(document).ready(function() {

    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage'],
        // sectionsColor: ['#fff', '#1BBC9B', '#7E8F7C'],
        menu: '#menu',
        //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
        // easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',  jump slide
        // fitToSection: false, turn off autoscrolling to page
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third and last page'],

        // paddingTop: '3em',
        responsiveWidth: 768,
        autoScrolling: false,
        //events
        // если нужна анимация только вниз стр. то убрать settimeout
        onLeave: function(index, nextIndex, direction){
          let sectionIndex = $('#section'+nextIndex),
          textContent = sectionIndex.find('.preview-text-content');
          textContent.removeClass('animated fadeInLeftBig');
          window.setTimeout(function(){
            textContent.addClass('animated fadeInLeftBig');
          },100),

            // numberContent
            numberContent = sectionIndex.find('.main-title');
            numberContent.removeClass('animated slideInDown');
            window.setTimeout(function(){
              numberContent.addClass('animated slideInDown');
            },100),
             // image animation
             imageContent = sectionIndex.find('.col-md-8 p');
             imageContent.removeClass('animated fadeInRightBig');
             window.setTimeout(function(){
              imageContent.addClass('animated fadeInRightBig');
            },100);
           },
           afterLoad: function(anchorLink, index){},
           afterRender: function(){},
           afterResize: function(){},
           afterResponsive: function(isResponsive){},
           afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
           onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
           }
         });

    $(".slider").slick({

      rows: 3,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,

          rows: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows:false,
          rows: 1

        }
      }
      ]
    });

    $(".slider-companys").slick({
      rows: 2,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      adaptiveHeight: true,
      infinite: true,
      padding: '50px',
      responsive: [

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,

          rows: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          dots: false,
          rows: 1

        }
      }
      ]
    });
  });



  $(window).on("scroll", function(){
    if($(window).scrollTop() > 680) {
      $('.spincrement').spincrement({
from: 0,    // Стартовое число
 //to: false,   // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
decimalPlaces: 0,   // Сколько знаков оставлять после запятой
decimalPoint: '.',  // Разделитель десятичной части числа
thousandSeparator: ' ',  // Разделитель тыcячных
duration: 3000, // Продолжительность анимации в миллисекундах
leeway: 50, // percent of duraion
easing: 'spincrementEasing',
fade: true
});
    }
  });
    // fp-viewing-secondPage

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        $("#header").addClass("activated");
      } else {
        $("#header").removeClass("activated");
      }
    });