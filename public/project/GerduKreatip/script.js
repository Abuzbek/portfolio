$(document).ready(function () {
    $(window).scroll(function () {

        $scroll = $(this).scrollTop();
        console.log($scroll);
        if ($scroll >= 815) {
            $('#nav').addClass('fixed-top');
        }
        else {
            $('#nav').removeClass('fixed-top');

        }

    });
    let $linking = $('.nav-links')
    console.log($linking)
    $linking.click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 800,
        })
    })

    //////////////////////////////////////////////////////////////////////////
    var bar = $('.progress-bar');
    var member = $('#member');
    var width = 0;
// console.log(bar);
// console.log(member);






    $(window).scroll(function () {

        if ($(this).scrollTop() >= $(member).offset().top ) {
            console.log(bar);
console.log(member);
            if ($(member[0]).hasClass('scrollActive')) {
                setInterval(go1, 200);
                function go1() {
                    if (width < 90) {
                        width++;
                        bar[0].style.width = width + '%';
                    }
                }
                setInterval(go2, 200);

                function go2() {
                    if (width < 80) {
                        width++;
                        bar[1].style.width = width + '%';
                    }
                }
                setInterval(go3, 200);

                function go3() {
                    if (width < 70) {
                        width++;
                        bar[2].style.width = width + '%';
                    }
                }
                setInterval(go4, 200);

                function go4() {

                    if (width < 87) {
                        width++;
                        bar[3].style.width = width + '%';
                    }
                }

                setInterval(go5, 200);

                function go5() {

                    if (width < 63) {
                        width++;
                        bar[4].style.width = width + '%';
                    }
                }
            }


        }

    });
    var member1 = $('#for')
    $('.pro').innerHTML = "0"
    $('.work').innerHTML = "0"
    $('.face').innerHTML = "0"
    $('.coffe').innerHTML = "0"
    var j = 0; //количество прокручивания счетчика при скролле 
    $(window).scroll(function () {
        if (j < 1) {
            if ($(window).scrollTop() >= $(member1).offset().top - 1) {
                count('.pro', 850, 921, '');
                count('.work', 800, 871, '');
                count('.face', 190, 238, '');
                count('.coffe', 300, 352, '');
                j++;

            }
        }
    });
    function count(selector, min, max, sign) {
        let i = min;
        setInterval(function () {
            if (i < max) {
                i++;
                document.querySelector(selector).innerHTML = i + sign;
            };
        }, 10);
    };

});