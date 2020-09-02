window.addEventListener('load', function (e) {
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  var slide = document.querySelectorAll('.swiper-slide');
  var tex = document.querySelectorAll('.textures');

  console.log(tex, slide);

  for (var i = 0; i < slide.length; i++) {
    var rand = 0
    slide[i].addEventListener('mousedown', function (e) {
      function say() {
        if (i >= slide.length) {
          i = 0
        }
        tex[rand].classList.remove('active');
        rand++
        if (rand >= tex.length) {
          rand = 0
        }
        tex[rand].classList.add('active');
      }
      say()
    })

  }

});

$(document).ready(function () {
  
  $('.owl-carousel.logoz').owlCarousel({
    items: 5,
    autoplay: true,
    autoplayTimeout: 2000,
    mouseDrag: false,
    loop: true,
    nav: false,
    margin:30,
    responsive:{
      0:{
        items: 2,

      },
      575:{
        items: 2,
      },
      767:{
        items: 2,
      },
      991:{
        items: 3,
      },
      1000:{
        items: 5,
      }
    },
  })
  $('.owl-carousel.header_carousel').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    mouseDrag: false,
    loop: true,
    nav: false,
  })

  $('section.slider .owl-carousel').owlCarousel({
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: true,
    loop: true,
    nav: true,
    responsive:{
      0:{
        items: 1,

      },
      575:{
        items: 1,
      },
      767:{
        items: 2,
      },
      991:{
        items: 3,
      },
      1000:{
        items: 4,
      }
    },
  })
  $('.owl-prev').addClass('fal fa-chevron-left white-text mr-5').text('');
  $('.owl-next').addClass('fal fa-chevron-right white-text ml-5').text('');






});