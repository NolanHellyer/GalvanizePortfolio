$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(document).scrollTop();

        $(".section h2").each(function () {


            var pos = $(this).position(),
                parent_bottom = $(this).parent().position().top + $(this).parent().height(),
                parent_top = $(this).parent().position().top,
                theight = $(this).height;

            if (scroll < parent_bottom && parent_top < scroll) {
                $(this).addClass("sticky");
                $(this).removeClass("stuck");
            } else {
                $(this).removeClass("sticky");

            }
            if ($(".sticky").outerHeight(true) + scroll >= parent_bottom) {
                $(this).removeClass("sticky");
                $(this).addClass("stuck");
            }
        });
    });
});
