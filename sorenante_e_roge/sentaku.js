class Sys {
    /* 読むだけのメッセージ */
    state = null;
    next = null;

    constructor() {
        $("#system").hide();
    }

    init(msg) {
        this.state = true;
        $("#system").text(msg);
        $("#system").show();
    }

    async close() {
        let next = null;
        return new Promise((resolve) => {
            $("#system").text("");
            $("#system").hide();
            this.state = null;
            resolve();
            next = this.next;
            this.next = null;
        }).then(() => {
            if (next != null) {
                next();
            }
        });
    }

    async controller(key) {
        if (key == 'e' || key == 's') {
            await this.close();
        }
    }
}

class Yn {
    /* yes no message */
    state = null;
    yes = null;
    no = null;

    constructor() {
        $("#yesno").hide();
        $("#yesnor").text("はい\nいいえ");
    }

    init(msg) {
        this.state = true;
        this.draw();
        $("#yesno").show();
        $("#system").text(msg);
        $("#system").show();
    }

    draw() {
        if (this.state) {
            $("#yesnol").text(SELECTOR + "\n　");
        } else {
            $("#yesnol").text("　\n" + SELECTOR);
        }
    }

    async close() {
        let yes = null;
        let no = null;
        return new Promise((resolve) => {
            $("#system").text("");
            $("#system").hide();
            $("#yesno").hide();
            yes = this.yes;
            no = this.no;
            this.yes = null;
            this.no = null;
            resolve();
        }).then(() => {
            if (yes && this.state) {
                yes();
            }
            if (no && !this.state) {
                no();
            }
            this.state = null;
        });
    }

    async controller(key) {
        switch (key) {
            case 'u':
            case 'd':
                this.state = !this.state;
                this.draw();
                break;
            case 'e':
                await this.close();
                break;
            default:
                break;
        }
    }
}
