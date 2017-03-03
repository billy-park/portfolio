$(document).ready(function() {

  portfolioLine = $('#portfolioWrapper').offset().top;
  textHeightDefault = $('.projectImageOverlay > h4').height() + 20;


  //switch navbar classes depending on location on page
  if($('#navbar').offset().top < portfolioLine ) {
    $('#navbar').addClass("navbarDefault");
    $('#navbar').removeClass("navbarAlt");
  } else {
    $('#navbar').addClass("navbarAlt");
    $('#navbar').removeClass("navbarDefault");
  };

  $(window).scroll(function() {
    if($('#navbar').offset().top > portfolioLine ) {
      $('#navbar').addClass("navbarAlt");
      $('#navbar').removeClass("navbarDefault");
    } else {
      $('#navbar').removeClass("navbarAlt");
      $('#navbar').addClass("navbarDefault");
    }
  });

  //apply button style on mouseover and remove on mouseout
  $('#navbar > .button').hover(function(){
    $(this).addClass("buttonHover");
  })
  $('#navbar > .button').mouseout(function(){
    $(this).removeClass("buttonHover");
  })

  //expand/shrink project information div
  /* removed because of potential issues with mobile devices
  $('.projectImageContainer').hover(function(){
    $(this).find('.projectImageOverlay').animate({height: "88px"}, 300);
  });
  $('.projectImageContainer').mouseout(function(){
    $(this).find('.projectImageOverlay').animate({height: textHeightDefault});
  });
  */
  /*$('navbar > .button').click(function(){
    $(this).scrollTop
  })*/

});
