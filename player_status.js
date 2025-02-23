player = { h: 20, m: 0, p: 8, d: 6, s: 4, e: 0 };

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
    contents.push("\tHP:\t\t\t" + player.h);
    contents.push("\tMP:\t\t\t" + player.m);
    contents.push("\tちから:\t\t" + player.p);
    contents.push("\tまもり:\t\t" + player.d);
    contents.push("\tすばやさ:\t\t" + player.s);
    contents.push("\tけいけんち:\t" + player.e);
    return contents
}
function getPlayerJumon() {
    return [];
}
