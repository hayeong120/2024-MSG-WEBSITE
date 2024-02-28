$(document).ready(function () {
    $(window).on("scroll", function () {
        $(".tutorial-page").each(function () {
            // .wrapper 요소가 화면에 보이는지 확인합니다.
            var windowHeight = $(window).height();
            var windowScrollTop = $(window).scrollTop();
            var wrapperOffset = $(this).offset().top;

            if (windowScrollTop + windowHeight > wrapperOffset) {
                // 화면에 보이면 해당 .wrapper 요소에 특정 클래스를 추가합니다.
                $(this).addClass("show");
            }
        });
    });
});
