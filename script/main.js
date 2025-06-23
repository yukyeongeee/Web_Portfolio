const swiper = document.querySelector('.carousel_wrapper');
const bullets = document.querySelectorAll('.carousel_circle');

let currentSlide = 0;

function showSlide(slideIndex) {
    swiper.style.transform = `translateX(-${slideIndex * 100}%)`;
    currentSlide = slideIndex;

    bullets.forEach((bullet, index) => {
        if (index === currentSlide) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(0);

/* top 버튼 */
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