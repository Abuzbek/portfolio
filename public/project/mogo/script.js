// $(document).ready(function () {
//     var sliderItem = $('.accard .slider_item');
// var cardHeader = $('accordion .card-header');
// });
// window.addEventListener('load', function () {
    // var sliderItem = document.querySelectorAll('.accard .slider_item');
    // var cardHeader = document.querySelectorAll('.accordion .card-header a');
    
    // console.log(sliderItem ,cardHeader);
    // var i = 0;
    // cardHeader.onclick = function(){
    //     sliderItem[i].classList.remove('active')
    //     i++
    //     sliderItem[i].classList.add('active')
    // }
//     $(document).ready(function () {
//             var sliderItem = $('section.accard .slider .slider_item ');
// var cardHeader = $('.accordion .card-header a');
//     console.log(sliderItem ,cardHeader);
//     cardHeader.click(function () { 
//         if(sliderItem.css('display') == 'block'){
//             sliderItem.fadeOut(700);
//         }
//         if(sliderItem.css('display') == 'none'){
//             sliderItem.fadeOIn(700);
//         }

//     });
//     });
    window.addEventListener('load', function (e) {
        var tex =  document.querySelectorAll('section.accard .slider .slider_item');
        var  slide=  document.querySelectorAll('.accordion .card-header a');
        
        console.log(slide,
            tex);
      
          for(var i = 0; i < slide.length ; i++){ 
               var rand = 0
               slide[i].addEventListener('mousedown' , function(e){
                //    if(i >= slide.length){
                //        i=0
                //    }
                  tex[rand].classList.remove('active');
                  rand++
                  if(rand>= tex.length){
                      rand = 0
                  }
                  tex[rand].classList.add('active');
          })
          }
         
       
      });
      $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            items: 6,
            autoplay: true,
            autoplayTimeout: 3000,
            mouseDrag: true,
            margin:70,
            loop: true,
        })
    });
    
// });