let imgOne = $('section.team img.one')

// console.log(imgOne.height());
// let heightImg = imgOne.height(); let widthtImg = imgOne.width()
// let imgTwo = $('section.team img.two')
// imgTwo.height(heightImg).width(widthtImg)
let img = $('section.team img')
// console.log(img.parent());
img.parent().parent().click(function (e) {
    e.preventDefault();
    $('.card.comment').addClass('fade')
    setTimeout(() => {
        $('.card.comment').removeClass('fade')
    }, 1000)
    let leftOffs = $(this).offset().left;
    console.log(leftOffs);
    if ($('body').width() >= 992 && $('body').width() <= 1100) {
        $('.card.comment .after').css({ 'left': `${leftOffs + 50}px` })
    }
    else{
        $('.card.comment .after').css({ 'left': `0px` }) 
        
    }
    $('.card.comment .after').css({ 'left': `${leftOffs - 100}px` })
});
// ==========================schochik===================
var member1 = $('.attechment')
$('.pro').text('0')
$('.work').text('0')
$('.face').text('0')
$('.coffe').text('0')
var j = 0; //количество прокручивания счетчика при скролле 
$(window).scroll(function () {
    if (j < 1) {
        if ($(window).scrollTop() >= $(member1).offset().top - 200) {
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
    // owl carousel
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            mouseDrag: true,
            // margin:30,
            loop: true,
        })
    })
    $(document).ready(function () {
        let img = $('section.blog .card img')
console.log(img);
let imgOne = $('#img1')
img.parent().parent().click(function(){
   let imgThis =  $(this).find('img')
   img.not(imgThis).slideUp();
   imgThis.slideDown();
}) 


    });