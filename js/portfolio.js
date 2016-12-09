$(document).ready(function() {

  portfolioLine = $('#portfolioWrapper').offset().top;

  $('#navbar > .button').hover(function(){
    $(this).addClass("buttonHover");
  })

  $('#navbar > .button').mouseout(function(){
    $(this).removeClass("buttonHover");
  })
  /*possible to edit css of classes instead of having different classes?*/
  $(window).scroll(function() {
    if($('#navbar').offset().top > portfolioLine ) {
      $('#navbar').addClass("navbarAlt");
    } else {
      $('#navbar').removeClass("navbarAlt");
    }
  })

  /*$('navbar > .button').click(function(){
    $(this).scrollTop
  })*/

});
