class Game {
    constructor() {
        this.controller = new Controller();
        this.message = new Message("#message");
        this.sentaku = new Sentaku("#sentaku", "#message");

        $("#aite").hide();
        $("#sentaku").hide();
        $("#param").hide();
    }

    init() {
        this.story();
    }

    story() {
        //this.sentaku.next = (sentaku) => this.message.init("hello");
        this.sentaku.init(
            "こんにちは",
            ["はい", "いいえ"],
            (state) => {
                this.message.init(state);
            },
        );
    }
}
