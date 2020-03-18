$(document).ready(() => {
    var $pinkimg = $("#pinkimg");
    var $box1 = $("#box1");
    $pinkimg.hide();

    $box1.mouseover(() => {
        $pinkimg.show();
    });

    $box1.on({
        mouseleave: () => {
            $pinkimg.hide();
        }
    });

    $pinkimg.dblclick(() => {
        $box1.css("margin-left", "+=100");
    })

    var $lightblueimg = $("#lightblueimg");
    var $box2 = $("#box2");
    $lightblueimg.hide();

    $box2.mouseover(() => {
        $lightblueimg.show();
    });

    $box2.on({
        mouseleave: () => {
            $lightblueimg.hide();
        }
    });

    $lightblueimg.dblclick(() => {
        $box2.css("margin-left", "+=100");
    });

    var $limegreenimg = $("#limegreenimg");
    var $box3 = $("#box3");
    $limegreenimg.hide();

    $box3.mouseover(() => {
        $limegreenimg.show();
    });

    $box3.on({
        mouseleave: () => {
            $limegreenimg.hide();
        }
    });

    $limegreenimg.dblclick(() => {
        $box3.css("margin-left", "+=100");
    });

    var $tealimg = $("#tealimg");
    var $box4 = $("#box4");
    $tealimg.hide();

    $box4.mouseover(() => {
        $tealimg.show();
    });

    $box4.on({
        mouseleave: () => {
            $tealimg.hide();
        }
    });

    $tealimg.dblclick(() => {
        $box4.css("margin-left", "+=100");
    });

});
