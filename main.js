let mode = 'wmap';
let bmode = "";

function init_game() {
    /* 画面ロード時の処理 */
    $("#system").hide();
    $("#menu").hide();
    initMap();
    wmapInit();
}

function smsg(msg) {
    bmode = mode;
    mode = "sys";
    $("#system").text(msg);
    $("#system").show();
}
function smsgClose() {
    mode = bmode;
    bmode = "";
    $("#system").text("");
    $("#system").hide();
}

function controller(key) {
    if (mode === 'wmap') {
        wmapController(key);
    } else if (mode === 'menu') {
        menuController(key);
    } else if (mode === 'sys') {
        smsgClose();
    }
}

$(document).ready(function() {
    init_game();
    $(document).keydown(function(event) {
        let key;
        switch(event.which) {
            case 37:
                controller("l");
                break;
            case 38:
                controller("u");
                break;
            case 39:
                controller("r");
                break;
            case 40:
                controller("d");
                break;
            case 32:
                controller("s");
                break;
            case 13:
                controller("e");
                break;
            default:
                controller("a");
                break;
        }
    });
});
