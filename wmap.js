const wmap = { x: 20, y: 20, step: 0 };
const HSIZE = 15

function wmapInit() {
    wmapDraw();
}

function wmapController(key) {
    /* world_mapにいる時のコントローラー */
    let ny = wmap.y;
    let nx = wmap.x;
    switch(key) {
        case "l":
            nx = wmap.x - 1;
            break;
        case "u":
            ny = wmap.y - 1;
            break;
        case "r":
            nx = wmap.x + 1;
            break;
        case "d":
            ny = wmap.y + 1;
            break;
        case "e":
        case "s":
            initMenu();
            return;
        default:
            break;
    }
    wmapEvent(ny, nx);
}

function wmapEvent(ny, nx) {
    /* 移動先の座標に応じたイベント */
    let evt = world_evt[ny][nx]
    if (evt == 'x') {
        cantgo();
        return;
    }

    wmap.x = nx;
    wmap.y = ny;
    wmapDraw();
    wmap.step += 1;

    if (evt == 'd') {
        console.log("毒の沼地だ！");
        player.h -= 1;
        evt = 'e';
    }

    if (evt == 'e') {
        encount();
    }

    check_player();
}

function wmapDraw() {
    /* 現在地によってworld mapを描画する処理 */

    // player を表示
    const tmp_map = JSON.parse(JSON.stringify(world_map));
    tmp_map[wmap.y][wmap.x] = PLAYER;

    // mapの表示サイズを絞る
    const map_to_draw = [];
    const YMAX = world_map.length - 1;
    const XMAX = world_map[0].length -1;

    let ymin = wmap.y - HSIZE;
    let ymax = wmap.y + HSIZE;
    if (ymin < 0) {
        ydiff = 0 - ymin;
        ymin = 0;
        ymax += ydiff
    }
    if (YMAX < ymax) {
        ydiff = ymax - YMAX;
        ymin -= ydiff;
        ymax = YMAX;
    }
    let xmin = wmap.x - HSIZE;
    let xmax = wmap.x + HSIZE;
    if (xmin < 0) {
        xdiff = 0 - xmin;
        xmin = 0;
        xmax += xdiff
    }
    if (XMAX < xmax) {
        xdiff = xmax - XMAX;
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
