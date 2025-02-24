class Data {
    ctl = 'map'; // map, menu, battle, go
}

D = new Data();
battle = new Battle();
player = new Player();
sys = new Sys();
yn = new Yn();

const SELECTOR = "▶︎";

/* 画面ロード時の処理 */
function gamenInit() {
    $("#system").hide();
    $("#menu").hide();
    $("#battle").hide();
    $("#yesno").hide();
    $("#yesnor").text("はい\nいいえ");
}

function gameInit() {
    gamenInit();
    initMap();
    wmapInit();
    develop();
}

/* gameover */
function gameover() {
    $("#system").show();
    $("#system").text("ゆうしゃはしんでしまった！");
    D.ctl = "go";
}

/* モードに応じてコントローラーの対象を変える*/
function controller(key) {
    if (sys.state !== null) {
        sys.controller(key);
        return;
    }
    if (yn.state !== null) {
        yn.controller(key);
        return;
    }

    switch(D.ctl) {
        case "map":
            wmapController(key);
            break;
        case "menu":
            menuController(key);
            break;
        case "battle":
            battle.controller(key);
            break;
        default:
            break;
    }
}

/* entry point */
$(document).ready(function() {
    gameInit();
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

