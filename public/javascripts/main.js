// =============== particles-js Setup =============
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "../images/starburst_white_300_drop_2.png",
        "width": 50,
        "height": 50
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// =============== particles-js Setup =============
$(document).ready(function () {
  let blast = new OOP('.blast', 'rubberBand', 'animated',1000)
  let plump = new OOP('.plump', 'hinge', 'animated',2000)
  let headerImg = new OOP('.header_img', 'rubberBand', 'animated',1000)


  function OOP(tag, anim, anim2,daley) {
    let blast1 = $(tag)
    console.log(blast1);
    blast1.on('mouseover', say)
    function say() {
      $(this).addClass(`${anim} ${anim2}`);
      setTimeout(() => {
        $(this).removeClass(`${anim} ${anim2}`);
      }, daley)
    }
  }

});
//  ========== skill canvas ===============
$(document).ready(function() {
  if(!$('#myCanvas').tagcanvas({
    // textColour: '#ff0000',
    outlineColour: '#0000000',
    reverse: true,
    depth: 0.8,
    maxSpeed: 0.05,
    textFont: null,
    textColour: null,
    weightMode:'both',
    weight: true,
    initial: [0.1, -0.3],
    weightGradient: {
     0:    '#fff', // red
     //0.33: '#ff0', // yellow
     //0.66: '#0f0', // green
     1:    '#fff'  // blue
    }
  },'tags')) {
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

