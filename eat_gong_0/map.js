class Map {
    constructor(map_data, map_evt, x=20, y=20, hsize=15) {
        this.map = map_data;
        this.map_evt = map_evt;
        this.xy = {x, y}
        this.HSIZE = hsize
    }

    init() {
        this.draw();
    }

    controller(key, game) {
        let ny = this.xy.y;
        let nx = this.xy.x;
        switch(key) {
            case "l":
                nx = this.xy.x - 1;
                break;
            case "u":
                ny = this.xy.y - 1;
                break;
            case "r":
                nx = this.xy.x + 1;
                break;
            case "d":
                ny = this.xy.y + 1;
                break;
            case "e":
            case "s":
                game.menu.init();
                return;
            default:
                break;
        }
        this.evt(ny, nx, game);
    }

    draw() {
        // player を表示
        const tmp_map = JSON.parse(JSON.stringify(this.map));
        tmp_map[this.xy.y][this.xy.x] = PLAYER;

        // mapの表示サイズを絞る
        const map_to_draw = [];
        const YMAX = this.map.length - 1;
        const XMAX = this.map[0].length -1;

        let ymin = this.xy.y - this.HSIZE;
        let ymax = this.xy.y + this.HSIZE;
        if (ymin < 0) {
            let ydiff = 0 - ymin;
            ymin = 0;
            ymax += ydiff
        }
        if (YMAX < ymax) {
            let ydiff = ymax - YMAX;
            ymin -= ydiff;
            ymax = YMAX;
        }
        let xmin = this.xy.x - this.HSIZE;
        let xmax = this.xy.x + this.HSIZE;
        if (xmin < 0) {
            let xdiff = 0 - xmin;
            xmin = 0;
            xmax += xdiff
        }
        if (XMAX < xmax) {
            let xdiff = xmax - XMAX;
            xmin -= xdiff;
            xmax = XMAX;
        }
        for (let yy = ymin; yy <= ymax; yy++) {
            map_to_draw.push(tmp_map[yy].slice(xmin, xmax + 1));
        }

        // 描画
        let content = '';
        for (let row of map_to_draw) {
            content += row.join(' ') + '\n';
        }
        $('#gamen').text(content);
    }

    evt(ny, nx, game) {
        /* 移動先の座標に応じたイベント */
        let evt = this.map_evt[ny][nx]
        if (evt == 'x') {
            cantgo();
            return;
        }

        this.xy.x = nx;
        this.xy.y = ny;
        this.draw();

        if (evt == 'd') {
            console.log("毒の沼地だ！");
            game.player.param.h -= 1;
            damage();
            evt = 'e';
        }

        if (evt == 'e') {
            game.battle.encount(game);
        }
        game.player.check(game);
    }
}
