class Sentaku {
    data = { area: null, s_area: null, o_area: null, m_area: null };
    state = null;
    next = null;

    constructor(area, m_area) {
        this.data.area = area;
        this.data.s_area = area + "-l";
        this.data.o_area = area + "-r";
        this.data.m_area = m_area;
        $(area).hide();
    }

    fina() {
        this.state = null;
        this.next = null;

        $(this.data.area).hide();
        $(this.data.m_area).hide();
    }

    init(msg, options, next=null) {
        this.state = 0;
        this.size = options.length;
        this.next = next;

        this.mo_draw(msg, options);
        this.s_draw();

        $(this.data.area).show();
        $(this.data.m_area).show();
        $(this.data.s_area).show();
        $(this.data.o_area).show();
    }

    mo_draw(msg, options) {
        $(this.data.o_area).text(l2s(options));
        $(this.data.m_area).text(msg);
    }

    s_draw() {
        const selector = Array(this.size).fill("　");
        selector[this.state] = SELECTOR;
        $(this.data.s_area).text(l2s(selector));
    }

    async close(sentaku) {
        let next = null;
        let state;
        return new Promise((resolve) => {
            next = this.next;
            state = this.state;
            this.fina();
            resolve();
        }).then(() => {
            if (next != null) {
                next(state);
            }
        });
    }

    async controller(key, game) {
        switch (key) {
            case 'u':
                if (this.size -1 <= this.state) {
                    this.state = 0 
                } else {
                    this.state += 1
                }
                this.s_draw();
                break
            case 'd':
                if (this.state <= 0) {
                    this.state = this.size -1
                } else {
                    this.state -= 1
                }
                this.s_draw();
                break;
            case 'e':
                await this.close(game.sentaku);
                break; 
            default:
                break;
        }
    }
}
