$(document).ready(function() {

  //portfolioLine = $('#portfolioWrapper').offset().top;
  //this is iffy because of the fact that the offset will change once the navbar moves
  navbarLine = $('#navbar').offset().top;
  $(window).resize(function(){
    navbarLine = $('#navbar').offset().top;
    console.log('resize!');
    console.log(navbarLine);
  });
  $('#navbar').addClass("navbarDefault");
  if ($(window).scrollTop() > navbarLine) {
      $('#navbar').addClass("navFixed");
  };
  //switch navbar classes depending on location on page
  /*if($('#navbar').offset().top < portfolioLine ) {
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
*/
  //apply button style on mouseover and remove on mouseout
  $('#navbar > .button').hover(function(){
    $(this).addClass("buttonHover");
  })
  $('#navbar > .button').mouseout(function(){
    $(this).removeClass("buttonHover");
  })

  $(window).scroll(function(){
    if ($(window).scrollTop() > navbarLine) {
      $('#navbar').addClass("navFixed");
    }
    if ($(window).scrollTop() < navbarLine) {
      $('#navbar').removeClass("navFixed");
    }
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
