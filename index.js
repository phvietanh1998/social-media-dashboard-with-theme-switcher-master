// JavaScript source code
var checkbox = document.querySelector('input[type="checkbox"]');
$("#check-box").click(function () {
    if (checkbox.checked) {


        $("body").css("background", "linear-gradient(0deg, hsl(0, 0%, 100%) 70%, hsl(225, 100%, 98%) 30%)");
        ////$(".big-letter").css("color", "hsl(230, 17%, 14%)");
        //$(".normal-letter").css("color", "hsl(228, 12%, 44%)");
        ////$("h1").css("color", "hsl(230, 17%, 14%)");
        //$(".followers").css("color", "hsl(228, 12%, 44%)");
        //$(".nathanf").css("color", "hsl(228, 12%, 44%)");
        ////$(".bigbox").css("background-color", "hsl(227, 47%, 96%)");
        ////$(".smallbox").css("background-color", "hsl(227, 47%, 96%)");
    }
    else {
        $("body").css("background", "linear-gradient(0deg, hsl(230, 17%, 14%) 70%, hsl(232, 19%, 15%) 30%)");
    }
});

checkbox.addEventListener("change", function () {


    $("h1").toggleClass("color-big-text");
    $(".bigbox").toggleClass("color-box");
    $(".smallbox").toggleClass("color-box");
    $(".followers").toggleClass("color-small-text");
    $(".normal-letter").toggleClass("color-small-text");
    $(".nathanf").toggleClass("color-small-text");
    $(".big-letter").toggleClass("color-big-text");
    $(".big-letter1").toggleClass("color-big-text");
})
