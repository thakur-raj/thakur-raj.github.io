// $(window).on('resize', function () {
//     var win = $(this);
//     if (win.width() > 767) {
//                $('#moreOptions').addClass('dropdown-menu-right');
      
//     }
//     else {
//         $('#moreOptions').removeClass('dropdown-menu-right');
//     }

// });

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profileImage').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


