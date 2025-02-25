class Game {
    constructor() {
        this.controller = new Controller();
        this.message = new Message("#message");
        this.sentaku = new Sentaku("#sentaku", "#message");
        this.story = new Story();

        $("#aite").hide();
        $("#sentaku").hide();
        $("#param").hide();
    }

    init() {
        this.story.init(this);
    }
}
