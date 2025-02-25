class Game {
    constructor() {
        this.controller = new Controller();
        this.message = new Message("#message");

        $("#aite").hide();
        $("#sentaku").hide();
        $("#param").hide();
    }

    init() {

        this.story();
    }

    story() {
        this.message.init("こんにちは");
    }
}

$(document).ready(() => {
    game = new Game();
    game.init();
    $(document).keydown((event) => {
        game.controller.input(event.which, game);
    });
});
