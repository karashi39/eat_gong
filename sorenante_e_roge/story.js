class Story {
    init(game) {
        this.shinario(game);
    }

    shinario(game) {
        game.sentaku.init(
            "こんにちは",
            ["はい", "いいえ"],
            (state) => {
                switch(state) {
                    case 0:
                        game.message.init("よろしく");
                        break;
                    case 1:
                        game.message.init("あいさつはしっかりしよう")
                        break;
                    default:
                        break;
                }
            },
        );
    }
}
