class Message {
    state = null;
    next = null;
    data = {area: null};

    constructor(area) {
        $(area).hide();
        this.data.area = area;
    }

    fina() {
        this.state = null;
        this.next = null;
        $(this.data.area).text("");
        $(this.data.area).hide();
    }

    init(msg, next) {
        this.state = true;
        this.next = next;
        $(this.data.area).text(msg);
        $(this.data.area).show();
    }

    async close() {
        let next = null;
        return new Promise((resolve) => {
            next = this.next;
            this.fina();
            resolve();
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
