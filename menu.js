let mmode = "t";
let bmode = "";
let tmode = 0;
let nmode = 0;

const TMENU = ["しらべる","つよさ","じゅもん"];
let NMENU = [];
const SMENU = ["ここ", "うえ", "みぎ", "ひだり", "した"];

class Menu {
    mode;
    constructor(game) {
        this.tsuyosa = new InfoMenu("#nmenul", this);
        this.tsuyosa.getter = () => game.player.param_list();
        this.tsuyosa.close = () => this.init();

        this.tmenu = new SelectMenu("#tmenu", TMENU);
        this.tmenu.closec = () => this.close();
        this.tmenu.enterc = (state) => {
            switch(state) {
                case 0:
                    break;
                case 1:
                    this.mode == "tsuyosa";
                    this.tsuyosa.init();
                    break;
                case 2:
                    NMENU = game.player.jumon_list();
                    if (NMENU.length === 0) {
                        game.sys.init("つかえる呪文を覚えていない！");
                    }
                    break;
                default:
                    break;
            }
        };
        $("#menu").hide();
    }

    init() {
        game.controller.state = "menu";
        this.mode = "top";
        this.tmenu.init();
        $("#menu").show();
    }

    close() {
        game.controller.state = 'map';
        $("#menu").hide();
        $("#nmenur").text("");
        $("#nmenul").text("");
    }

    controller(key, game) {
        switch(this.mode) {
            case "top":
                this.tmenu.controller(key, game);
                break;
            case "tsuyosa":
                this.tsuyosa.controller(key);
                break;
            case "z":
            case "j":
                nmenuController(key, game);
                break;
            default:
                break;
        }
    }
}

class InfoMenu {
    getter = null;
    constructor(area) {
        this.area = area;
        $(area).hide();
    }

    init() {
        content = l2s(this.getter());
        $(this.area).text(content);
        $(this.area).show();
    }

    async close() {
        let next;
        return new Promise((resolve) => {
            next = this.closec;
            this.closec = null;
            resolve();
        }).then(() => {
            if (next != null) {
                next();
            }
        });
    }

    async controller(key) {
        switch(key) {
            case "l":
            case "s":
                await this.close();
                break;
            default:
                break;
        }
    }
}

class SelectMenu {
    state = 0;

    constructor(area, options) {
        this.area = area;
        this.area_l = area + "l";
        this.area_r = area + "r";
        this.options = options;
    }

    init() {
        $(this.area_r).text(l2s(this.options));
        $(this.area_r).show();
        $(this.area).show();
        this.state = 0;
        this.draw();
    }

    draw() {
        const selector = Array(this.options.length).fill("　");;
        selector[this.state] = SELECTOR;
        content = l2s(selector);
        $(this.area_l).text(content)
        $(this.area_l).show();
    }

    async enter() {
        let next;
        return new Promise((resolve) => {
            next = this.enterc;
            this.enterc = null;
            resolve();
        }).then(() => {
            if (next != null) {
                next();
            }
        });
    }

    async close() {
        let next;
        return new Promise((resolve) => {
            next = this.closec;
            this.closec = null;
            resolve();
        }).then(() => {
            if (next != null) {
                next();
            }
        });
    }


    async controller(key, game) {
        switch(key) {
            case "d":
                this.state += 1;
                if (this.options.length -1 < this.state) this.state = 0;
                this.draw();
                break;
            case "u":
                this.state -= 1;
                if (this.state < 0) this.state = this.options.length -1;
                this.draw();
                break;
            case "r":
            case "e":
                await this.enter();
                break;
            case "s":
            case "l":
                await this.close();
                return;
            default:
                break;
        }
    }
}
