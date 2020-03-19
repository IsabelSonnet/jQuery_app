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

    $pinkimg.mousedown(function(event) {
            switch (event.which) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    $box1.css("margin-left", "-=100");
                    break;
                default:
                    break;
            }
        });

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

    $lightblueimg.mousedown(function(event) {
            switch (event.which) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    $box2.css("margin-left", "-=100");
                    break;
                default:
                    break;
            }
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

    $limegreenimg.mousedown(function(event) {
            switch (event.which) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    $box3.css("margin-left", "-=100");
                    break;
                default:
                    break;
            }
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

    $tealimg.mousedown(function(event) {
            switch (event.which) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    $box4.css("margin-left", "-=100");
                    break;
                default:
                    break;
            }
        });

});
