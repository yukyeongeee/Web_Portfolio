/*TOP 버튼*/
$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $('#topBtn').fadeIn();
    }else {
      ('#topBtn').fadeOut();
    }
  });
  $('#topBtn').click(function() {
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
  });
});