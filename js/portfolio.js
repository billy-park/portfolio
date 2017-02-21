$(document).ready(function() {

  portfolioLine = $('#portfolioWrapper').offset().top;

  if($('#navbar').offset().top < portfolioLine ) {
    $('#navbar').addClass("navbarDefault");
    $('#navbar').removeClass("navbarAlt");
  } else {
    $('#navbar').addClass("navbarAlt");
    $('#navbar').removeClass("navbarDefault");
  }

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
      $('#navbar').removeClass("navbarDefault");
    } else {
      $('#navbar').removeClass("navbarAlt");
      $('#navbar').addClass("navbarDefault");
    }
  })

  /*$('navbar > .button').click(function(){
    $(this).scrollTop
  })*/

});
