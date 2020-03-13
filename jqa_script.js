$(document).ready(() => {
    var $pinkimg = $("#pinkimg");
    var $box1 = $("#box1");
    $pinkimg.hide();

    $box1.mouseover(() => {
        $pinkimg.show();
    });

    $box1.on({
        click: () => {
            $pinkimg.hide();
        }
    });

    var $tealimg = $("#tealimg");
    var $box4 = $("#box4");
    $tealimg.hide();

    $box4.mouseover(() => {
        $tealimg.show();
    });

    $box4.on({
        click: () => {
            $tealimg.hide();
        }
    });
});
