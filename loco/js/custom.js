$(document).ready(function () {
    $('.navbar-nav .nav-item').click(function () {
        $('.navbar-nav .nav-item').removeClass('active');

        $(this).addClass('active');
    })


    $(window).scroll(function () {
        'use strct'
        if ($(window).scrollTop() < 80) {
            console.log($(window).scrollTop());
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
            $('.navbar-default').css('background-color', 'rgba(59,59,59,0)');

        } else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });

            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0.7)',
                'border-color': 'rgba(59, 59, 59, 0.7)',
                'padding-top': '3px',
                'padding-bottom': '3px'
            });

            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top': '0px'

            });


            $('.navbar-nav > li > a').css({
                'padding-top': '0px'

            });
        }
    });



});


$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        'use strict';
        
        $("section").each(function() {
            'use strict';
            var bb = $(this).attr("id"); 
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 50;
            
            if ($(window).scrollTop()>grttop && $(window).scrollTop()<grttop+hei)
            {
                $("li a[href='#"+bb+"']").parent().addClass('active');

            }
            else{
                $("li a[href='#"+bb+"']").parent().removeClass('active');

            }
          
            
            
            
        });

    });
});

$(document).ready(function () {
    $('.bxslider').bxSlider({
        slideWidth:300,
        auto:true,
        minSlides:1,
        maxSlides:3,
        slideMargin:20
    });

    $(".counter-number").counterUp({
        delay: 10,
        time: 1000
    });
});

// Add animation / initialize wow
$(document).ready(function () {
    'use strict';
    new WOW().init();
});