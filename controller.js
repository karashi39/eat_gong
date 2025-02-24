const KEY = {
    k37: "l",
    k38: "u",
    k39: "r",
    k40: "d",
    k32: "s",
    k13: "e",
};

class Controller {
    state;

    constructor() {
        this.state = "map";
    }

    input(code, game) {
        const key = KEY["k" + code];
        if (game.sys.state !== null) {
            game.sys.controller(key);
            return;
        }
        if (game.yn.state !== null) {
            game.yn.controller(key);
            return;
        }

        switch(this.state) {
            case "map":
                game.wmap.controller(key, game);
                break;
            case "menu":
                game.menu.controller(key, game);
                break;
            case "battle":
                game.battle.controller(key, game);
                break;
            default:
                break;
        }
    }
}
