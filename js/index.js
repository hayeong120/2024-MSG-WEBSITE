$(document).ready(function () {

    var mousePos = {};

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }


    var range = 1;

    var color = "background: white;";//rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";

    var sizeInt = 10;//getRandomInt(10, 30);
    var size = "";
    var left = "";
    var top = "";
    var border = "";
    var index = 9999;
    var offset = 0.5;
    var lange = 0;
    var style = "";
    var ball;
    var ball_qty = 10;

    // for(var i=0; i < ball_qty ; i++){
    lange = (sizeInt - (offset));
    size = "height: " + lange + "px; width: " + lange + "px;";
    left = "left: " + (lange) + "px;";
    top = "top: " + (lange) + "px;";
    border = "border: 1px solid var(--main-color);"

    style = left + top + color + size + border + "z-index: " + (index) + ";";
    ball = $("<div class='ball' id='ball_mouse_tracker_" + "' style='" + style + "'></div>");
    $(ball).appendTo('#wrap');
    // }

    function moveCircle(e) {


        //   for(var i=0; i < ball_qty ; i++){
        TweenLite.to(ball, (0.1 + (0.03 * i)), {
            css: {
                left: e.pageX - (ball.outerWidth() / 2),
                top: e.pageY - (ball.outerHeight() * 3.5)
            }
        });
        // }
    }

    $(window).on('mousemove', moveCircle);
});