const KEY = {
    k37: "l",
    k38: "u",
    k39: "r",
    k40: "d",
    k32: "s",
    k13: "e",
};

function controller(code) {
    key = KEY["k" + code];
    if (sys.state !== null) {
        sys.controller(key);
        return;
    }
    if (yn.state !== null) {
        yn.controller(key);
        return;
    }

    switch(D.ctl) {
        case "map":
            wmapController(key);
            break;
        case "menu":
            menuController(key);
            break;
        case "battle":
            battle.controller(key);
            break;
        default:
            break;
    }
}
