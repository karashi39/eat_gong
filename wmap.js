const wmap = { x: 20, y: 20 };
const HSIZE = 17

function wmapInit() {
    wmapDraw();
}

function wmapController() {
    /* world_mapにいる時のコントローラー */
    let ny = wmap.y;
    let nx = wmap.x;
    switch(event.which) {
        case 37: // left
            nx = wmap.x - 1;
            break;
        case 38: // up
            ny = wmap.y - 1;
            break;
        case 39: // right
            nx = wmap.x + 1;
            break;
        case 40: // down
            ny = wmap.y + 1;
            break;
        default:
            break;
    }
    wmapEvent(ny, nx);
}

function wmapEvent(ny, nx) {
    /* 移動先の座標に応じたイベント */
    if (world_evt[ny][nx] == 'x') {
        cantgo();
        return;
    }
    wmap.x = nx;
    wmap.y = ny;
    wmapDraw();
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
