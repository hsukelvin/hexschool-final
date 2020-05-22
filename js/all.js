$(document).ready(function(){

    $('.content img').on('click',function(){
        $(this).addClass('shake').delay(1000).queue(function(){
            //重複搖動
            $(this).removeClass("shake").dequeue();
        });
    });

    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
        },
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
    })

    //lightbox options
    lightbox.option({
      positionFromTop: 300,
    })

    /* 按下top按鈕時的事件 */
    $('.top a').click(function(event){
      event.preventDefault();
      $("html,body").animate({
          scrollTop: 0
      }, 1000); //1000 = 1秒
    });

    /* 偵測卷軸滑動時，往下滑超過100px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 100){
          $('.top a').fadeIn();
        } else {
          $('.top a').fadeOut();
        }
    });

});