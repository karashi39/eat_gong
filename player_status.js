player = { h: 20, m: 0, p: 8, d: 6, s: 4 };

function check_player() {
    if (player.h <= 0) {
        gameover();
    }
}

function gameover() {
    $("#system").show();
    $("#system").text("ゆうしゃはしんでしまった！");
    mode = "go";
}
