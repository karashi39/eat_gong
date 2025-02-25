class Message {
    /* 読むだけのメッセージ */
    state = null;
    next = null;
    data = {area: null};

    constructor(area) {
        $(area).hide();
        this.data.area = area;
    }

    init(msg) {
        this.state = true;
        $(this.data.area).text(msg);
        $(this.data.area).show();
    }

    async close() {
        let next = null;
        return new Promise((resolve) => {
            $(this.data.area).text("");
            $(this.data.area).hide();
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
            this.state = false;
        }
    }
}
