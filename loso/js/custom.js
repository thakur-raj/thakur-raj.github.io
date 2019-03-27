$(document).ready(function () {
    $('.navbar-nav .nav-item').click(function () {
        $('.navbar-nav .nav-item').removeClass('active');
        console.log(this);

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
                'padding-top':'3px',
                'padding-bottom':'3px'
            });

            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top':'0px'
                
            });


            $('.navbar-nav > li > a').css({
                'padding-top':'0px'
                
            });
        }
    });



});


