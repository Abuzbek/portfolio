
$(document).ready(function () {
  let mobilBtn = $('.menu_link')
  mobilBtn.click(() => {
    if ($('.nav-menu-center').css('opacity') == '0') {
      $('.nav-menu-center').css('opacity', '1')
    }
    else {
      $('.nav-menu-center').css('opacity', '0')

    }
  })
  const blast = new OOP('.blast', 'rubberBand', 'animated')
  const plump = new OOP('.plump', 'hinge', 'animated')
  const headerImg = new OOP('.header_img', 'rubberBand', 'animated')
  const workItem = new OOP('.workesItemNext', 'pulse', 'animated')
  const workItem2 = new OOP('.workesItem', 'pulse', 'animated')

  // console.log($('.blast'));


  function OOP(tag, anim, anim2) {
    let blast1 = $(tag)
    console.log(blast1);
    blast1.on('mouseover', say)
    function say() {
      $(this).addClass(`${anim} ${anim2}`);
      setTimeout(() => {
        $(this).removeClass(`${anim} ${anim2}`);
      }, 2000)
    }
  }
});
//  ========== skill canvas ===============
$(document).ready(function () {
  if (!$('#myCanvas').tagcanvas({
    // textColour: '#ff0000',
    outlineColour: '#0000000',
    reverse: true,
    depth: 0.8,
    maxSpeed: 0.09,
    textFont: null,
    textColour: null,
    weightMode: 'both',
    shape:'sphere',
    noSelect:true,
    weight: true,
    initial:[0.3,-0.1],
    weightGradient: {
      0: '#fff', 
      1: '#fff'  
    }
  }, 'tags')) {
    // something went wrong, hide the canvas container
    $('#myCanvasContainer').hide();
  }
});
// ======== typed.js setup ================
const typed5 = new Typed('#typed', {
  strings: ['FRONT-END DEVELOPER', 'BACK-END DEVELOPER', 'FULL STACK DEVELOPER'],
  typeSpeed: 0,
  backSpeed: 0,
  cursorChar: `|`,
  shuffle: true,
  smartBackspace: true,
  loop: true
});

