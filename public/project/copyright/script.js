
$(document).ready(function () {
    // $('.menu-link').click(function () {
    //     $('menu').css('transform', 'translateX(0%)');
    // })
    // $('.close-btn').click(function () {
    //     $('menu').css('transform', 'translateX(-100%)');

    // })
    let $links = $('.navbar .navbar-nav .nav-item .nav-link');

    $links.click(function (e) {

        e.preventDefault();
        console.log(this);
        $links.removeClass('active');
        $(this).addClass('active')
    });
    // // $(window).scroll(function () {
    // //     $scroll = $(this).scrollTop();
    // //     console.log($scroll);
    // //     $links.each(function () {
    // //         let $id = $(this).attr('href');
    // //         let $target = $($id).offset().top
    // //         if ($scroll >= $target) {
    // //             $links.removeClass('active')
    // //             $(this).addClass('active')
    // //         }


    // //     })

    // });
    let $linking = $('.nav-links')
    console.log($linking)
    $linking.click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('header').height(),
        })
    })
})

