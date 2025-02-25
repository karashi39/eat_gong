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
        this.tsuyosa = new InfoMenu("#nmenul");
        this.tsuyosa.data.getter = () => game.player.param_list();
        this.tsuyosa.data.closec = () => this.init();

        this.tmenu = new SelectMenu("#tmenu", TMENU);
        this.tmenu.data.closec = () => this.close();
        this.tmenu.data.enterc = (menu) => {
            switch(menu.tmenu.state) {
                case 0:
                    break;
                case 1:
                    this.mode = "tsuyosa";
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
                this.tmenu.controller(key, game.menu);
                break;
            case "tsuyosa":
                this.tsuyosa.controller(key, game.menu);
                break;
            default:
                break;
        }
    }
}

class InfoMenu {
    getter = null;
    data = {area: null, getter: null, closec: null};

    constructor(area) {
        this.data.area = area;
        $(area).hide();
    }

    init() {
        content = l2s(this.data.getter());
        $(this.data.area).text(content);
        $(this.data.area).show();
    }

    async close(menu) {
        let next;
        return new Promise((resolve) => {
            $(this.data.area).text("");
            $(this.data.area).hide();
            next = this.data.closec;
            this.data.closec = null;
            resolve();
        }).then(() => {
            if (next != null) {
                next();
            }
        });
    }

    async controller(key, menu) {
        switch(key) {
            case "l":
            case "s":
                await this.close(menu);
                break;
            default:
                break;
        }
    }
}

class SelectMenu {
    data = {area: null, area_l:null, area_r: null, options: null, enterc: null, closec: null};
    state = 0;

    constructor(area, options) {
        this.data.area = area;
        this.data.area_l = area + "l";
        this.data.area_r = area + "r";
        this.data.options = options;
    }

    init() {
        $(this.data.area_r).text(l2s(this.data.options));
        $(this.data.area_r).show();
        $(this.data.area).show();
        this.state = 0;
        this.draw();
    }

    draw() {
        const selector = Array(this.data.options.length).fill("　");;
        selector[this.state] = SELECTOR;
        content = l2s(selector);
        $(this.data.area_l).text(content)
        $(this.data.area_l).show();
    }

    async enter(menu) {
        let next;
        return new Promise((resolve) => {
            next = this.data.enterc;
            this.data.enterc = null;
            resolve();
        }).then(() => {
            if (next != null) {
                next(menu);
            }
        });
    }

    async close(menu) {
        let next;
        return new Promise((resolve) => {
            next = this.data.closec;
            this.data.closec = null;
            resolve();
        }).then(() => {
            if (next != null) {
                next(menu);
            }
        });
    }


    async controller(key, menu) {
        switch(key) {
            case "d":
                this.state += 1;
                if (this.data.options.length -1 < this.state) this.state = 0;
                this.draw();
                break;
            case "u":
                this.state -= 1;
                if (this.state < 0) this.state = this.data.options.length -1;
                this.draw();
                break;
            case "r":
            case "e":
                await this.enter(menu);
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
