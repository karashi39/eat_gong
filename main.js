class Data {
    ctl = 'map'; // map, menu, battle, go
    sys = false;
    yn = null;
    next = null;
}

D = new Data();
battle = new Battle();
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

/* 読むだけのメッセージ */
function smsg(msg) {
    D.sys = true;
    $("#system").text(msg);
    $("#system").show();
}
async function smsgClose() {
    return new Promise((resolve) => {
        $("#system").text("");
        $("#system").hide();
        D.sys = false;
        resolve();
        next = D.next;
        D.next = null;
    }).then(() => {
        if (next != null) {
            next();
        }
    });
}
async function smsgController(key) {
    if (key == 'e' || key == 's') {
        await smsgClose();
    }
}

/* yes no message */
function yn(msg) {
    D.yn = true;
    ynDraw();
    $("#yesno").show();
    $("#system").text(msg);
    $("#system").show();
}
function ynDraw() {
    if (D.yn) {
        s = SELECTOR + "\n　";
    } else {
        s = "　\n" + SELECTOR;
    }
    $("#yesnol").text(s);
}
function ynClose() {
    $("#system").text("");
    $("#system").hide();
    $("#yesno").hide();
    D.yn = false;
}
function ynController(key) {
    switch (key) {
        case 'u':
        case 'd':
            D.yn = !D.yn;
            ynDraw();
            break;
        case 'e':
            ynClose();
            break;
        default:
            break;
    }
}

/* モードに応じてコントローラーの対象を変える*/
function controller(key) {
    if (D.sys) {
        smsgController(key);
        return;
    }
    if (D.yn !== null) {
        ynController(key);
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

