class Controller {
    data = {
        keymap: { k37: "l", k38: "u", k39: "r", k40: "d", k32: "s", k13: "e"}
    };
    state;

    constructor() {
        this.state = "map";
    }

    input(code, game) {
        const key = this.data.keymap["k" + code];
        if (game.message.state) {
            game.message.controller(key, game);
        }
    }
}
