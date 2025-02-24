class Game {
    constructor() {
        this.controller = new Controller();
        this.sys = new Sys();
        this.yn = new Yn();
        this.player = new Player();
        this.battle = new Battle();
        this.wmap = new Map(world_map, world_evt);
    }

    init() {
        initMap();
        this.wmap.init();
    }

    over() {
        $("#system").show();
        $("#system").text("ゆうしゃはしんでしまった！");
        this.controller.state = "go";
    }
}

$(document).ready(() => {
    $("#system").hide();
    $("#menu").hide();
    $("#battle").hide();
    $("#yesno").hide();
    $("#yesnor").text("はい\nいいえ");

    game = new Game();
    game.init();
    $(document).keydown((event) => {
        game.controller.input(event.which, game);
    });
});
