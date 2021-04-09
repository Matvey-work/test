$(document).ready(function(){
  $('.sliders').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3100,
    adaptiveHeight: true,
    cssEase: 'linear',
  });
});
$('.slider-nav').slick({
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true
});

$('.vacancy-item').on('click', function(){
    if ($(this).find('.more-info').hasClass('visible')) {
    $(this).find('.more-info').removeClass('visible');
  } else {
    $('.more-info').removeClass('visible');
    $(this).find('.more-info').addClass('visible');
  }
});

$('.vacancy-item').on('click', function(){
  $(this).toggleClass('active');
});

// $('.gamburge').on('click', function(){
//   $('.main-nav').find('.main-menu').toggleClass('visible');
// });

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav-toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
