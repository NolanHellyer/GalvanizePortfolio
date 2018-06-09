function slide_elements(current, next, slider_size) {
    $(".as-" + current).css({
        width: "100%"
    });

    $(".as-" + current).delay(5000).animate({
        width: "0%"
    }, 4000);
    
    $(".as-" + current + " .as-title").delay(5000).animate({
        opacity: "0"
    }, 1500, function(){
        $(".as-" + next + " .as-title").animate({
            opacity: "1"
        }, 1500);
    });
    
    $(".as-" + next).delay(5001).animate({
        width: "100%"
    }, 4000, function () {
        if (current == slider_size) {
            current = 1;
        } else {
            current = current + 1;
        }
        if (next == slider_size) {
            next = 1;
        } else {
            next = next + 1;
        }
        slide_elements(current, next, slider_size);
    });
}

$(document).ready(function () {

    var current = 1;
    var next = 2;
    var slider_size = 3
    
    $(".as-" + current + " .as-title").css({
        opacity: "1"
    });

    slide_elements(current, next, slider_size);

});
