class Game {
    constructor() {
        this.controller = new Controller();
        this.sys = new Sys();
        this.yn = new Yn();
        this.player = new Player();
        this.battle = new Battle();
    }

    init() {
        initMap();
        wmapInit();
    }

    gameover() {
        $("#system").show();
        $("#system").text("ゆうしゃはしんでしまった！");
        this.controller.state = "go";
    }
}

const SELECTOR = "▶︎";

$(document).ready(function() {
    $("#system").hide();
    $("#menu").hide();
    $("#battle").hide();
    $("#yesno").hide();
    $("#yesnor").text("はい\nいいえ");

    game = new Game();
    game.init();
    $(document).keydown(function(event) {
        game.controller.input(event.which, game);
    });
});
