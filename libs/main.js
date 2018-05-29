  $(document).ready(function() {

    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage'],
        // sectionsColor: ['#fff', '#1BBC9B', '#7E8F7C'],
        menu: '#menu',
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third and last page'],
        loopBottom: false,
        loopTop: false,
    // loopHorizontal: true,
        // paddingTop: '3em',
        responsiveWidth: 768,
        verticalCentered:true,
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
  });
  



// ----------------randon link color
var randomLinks = $('.tmp-class.open-full-post span, main a'); //what i hover over
var original = randomLinks.css('color');
var colors = ['#000', '#ef047f', '#01a0c6'];

randomLinks.hover(function () { //mouseover
    var col2 = Math.floor(Math.random() * colors.length);
    var newcolor = colors[col2];
    $(this).css('color', newcolor);
}, function () { //mouseout
    $(this).css('color', original);
});



 $(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
    $("#header").addClass("activated");
  } else {
        $("#header").removeClass("activated");
      }
    });

 // ------------------sort portfolio
var selectedClass = "";
$(".fil-cat").click(function(){ 
  selectedClass = $(this).attr("data-rel"); 
  $("#portfolio").fadeTo(100, 0.1);
  $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
  setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('scale-anm');
    $("#portfolio").fadeTo(300, 1);
  }, 300); 

});