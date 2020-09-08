$(function(){
$('.slider').slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '210px',
    focusOnSelect: true,
    dots: true,
    prevArrow:'<div class="prev"></div>',
    nextArrow:'<div class="next"></div>',
    });
});

//上に戻る
$(function(){
    var topBtn = $('.slide-button');
    topBtn.click(function(){
        $('body,html').animate({scrollTop:0},1000); //1000秒でスクロール
        return false;
    }); 
});
