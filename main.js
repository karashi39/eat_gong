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

/* entry point */
$(document).ready(function() {
    gameInit();
    $(document).keydown(function(event) {
        controller(event.which);
    });
});
