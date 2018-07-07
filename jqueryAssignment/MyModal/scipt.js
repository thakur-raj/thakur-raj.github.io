$(document).ready(() => {
    $("#myBtn").click(function () {

        // $(".mymodal").css("display", "block");
        $(".mymodal").show();
    });

    $(".close").click(() => {

        // $(".mymodal").css("display", "none");
        $(".mymodal").hide();
    });


    $(window).click((event) => {
        if (event.target.id == "myModal") {
            $(".mymodal").hide();
        }
    });


});