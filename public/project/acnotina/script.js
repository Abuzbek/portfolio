new WOW().init();
$(document).ready(function () {
    let nav = $('.navbar')
    $(window).scroll(function () {
        let $window = $(this).scrollTop();
        // console.log($(this).scrollTop());
        if ($window >= $('#home').offset().top) {
            if (nav.hasClass('red')) {
                nav.removeClass('red')

            }

        }
        if ($window >= $('#about').offset().top) {
            if (nav.hasClass('violet')) {
                nav.removeClass('violet')
            }
            nav.addClass('red')
            // console.log(nav);


        }
        if ($window >= $('#intro').offset().top) {
            nav.removeClass('green')
            nav.removeClass('red')
            nav.addClass('violet')


        }
        if ($window >= $('#specials').offset().top) {
            nav.removeClass('violet')
            nav.removeClass('blue')
            nav.addClass('green')


        }
        if ($window >= $('#menu').offset().top) {
            nav.removeClass('green')
            nav.addClass('blue')
            // console.log('#intro');

        }

        let $links = $('.navbar .navbar-nav .nav-item .nav-link')
       console.log($links);
       
        $links.each(function () {
            let $id = $(this).attr('href');
            console.log($id);
            let $target = $($id).offset().top;
            if ($window >= $target) {
                $links.removeClass('active')
                $(this).addClass('active')
            }


        })
    })

    $(".slide").slick({
        dots: true,
        vertical: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="fal fa-chevron-right text-white fa-3x" style="cursor:pointer;" />',
        prevArrow: '<i class="fal fa-chevron-left text-white fa-3x" style="cursor:pointer;" />',
        speed: 500,
        useTransform: false,
        verticalSwiping: false,
        autoplay: true,

    });
    let cardIntro = $('#intro .card')
    cardIntro.mouseover(function () {
        let imgActive = $(this).find('img.first');
        let imgNoneActive = $(this).find('img.second');
        imgActive.removeClass('active');
        imgNoneActive.addClass('active');

    });
    cardIntro.mouseout(function () {
        let imgActive = $(this).find('img.first');
        let imgNoneActive = $(this).find('img.second');
        imgNoneActive.removeClass('active').css('z-index', '1');
        imgActive.addClass('active').css('z-index', '3');


    });
    let imgHeight = cardIntro.find('img').height()
    cardIntro.find('.card-header').css('height', `${imgHeight + 30}px`);
});
function port() {
    let $link = $('section#specials nav ul li a')
    let $gallery = $('.galleryImg')
    // console.log($link ,$gallery);
    console.log();
    $link.click(function (e) {
        e.preventDefault()
        $link.removeClass('active')
        let attr = $(this).attr('date-src');
        $gallery.css('display', 'none');
        $(attr).css('display', 'block');
        console.log(attr);
        // console.log($(attr).parent());
        setTimeout($gallery.parent().fadeOut(), 500)
        setTimeout($(attr).parent().fadeIn(), 500)
        //   if($gallery.hasClass(attr)){



        //   }
    })
}
port()

if (typeof Placeholdem === 'function') {
    if (document.querySelectorAll('[placeholder]').length) {
        Placeholdem(document.querySelectorAll('[placeholder]'));
    };
}

