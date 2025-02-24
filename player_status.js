player = { l: 1, h: 20, m: 0, p: 8, d: 6, s: 4, e: 0, g: 0 };

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

function getPlayerInfo() {
    let contents = [];
    contents.push("\tLv :\t\t" + player.l);
    contents.push("\tHP :\t\t" + player.h);
    contents.push("\tMP :\t\t" + player.m);
    contents.push("\tちから :\t" + player.p);
    contents.push("\tまもり :\t" + player.d);
    contents.push("\tすばやさ :\t" + player.s);
    contents.push("\tけいけん :\t" + player.e);
    contents.push("\tゴールド :\t" + player.g);
    return contents
}
function getPlayerJumon() {
    return [];
}
