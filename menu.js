let mmode = "t";
let bmode = "";
let tmode = 0;
let nmode = 0;

const TMENU = ["しらべる","つよさ","じゅもん"];
let NMENU = [];
const SMENU = ["ここ", "うえ", "みぎ", "ひだり", "した"];

function initMenu(game) {
    game.controller.state = "menu";
    mmode = "t";
    tmode = 0;
    nmode = 0;
    $("#nmenul").text("");
    $("#nmenur").text("");
    $("#menu").show();
    tmenuDraw();
}

function closeMenu(game) {
    game.controller.state = 'map';
    $("#menu").hide();
}

function closeNMenu() {
    mmode = "t";
    $("#nmenul").text("");
    $("#nmenur").text("");
}

function tmenuDraw() {
    let contentr = "";
    for (let tm of TMENU) {
        contentr += tm + '\n';
    }
    $("#tmenur").text(contentr);

    const TMODE = Array(TMENU.length).fill("　");;
    TMODE[tmode] = SELECTOR;
    let contentl = "";
    for (let tm of TMODE) {
        contentl += tm + '\n';
    }
    $("#tmenul").text(contentl)
}
function nmenuDraw() {
    let contentr = "";
    for (let nm of NMENU) {
        contentr += nm + '\n';
    }
    $("#nmenur").text(contentr);

    if (mmode != "s") return;

    const NMODE = Array(NMENU.length).fill("　");;
    NMODE[nmode] = SELECTOR;
    let contentl = "";
    for (let nm of NMODE) {
        contentl += nm + '\n';
    }
    $("#nmenul").text(contentl)
}

function initNMenu(game) {
    $("#nmenul").text("");
    $("#nmenur").text("");
    switch(tmode) {
        case 0:
            mmode = "s";
            NMENU = SMENU;
            break;
        case 1:
            mmode = "z"
            NMENU = game.player.param_list();
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
    nmenuDraw();
}

function menuController(key, game) {
    switch(mmode) {
        case "t":
            tmenuController(key, game);
            break;
        case "s":
        case "z":
        case "j":
            nmenuController(key, game);
            break;
        default:
            break;
    }
}

function tmenuController(key, game) {
    switch(key) {
        case "d":
            tmode += 1;
            if (TMENU.length -1 < tmode) tmode = 0;
            tmenuDraw();
            break;
        case "u":
            tmode -= 1;
            if (tmode < 0) tmode = TMENU.length -1;
            tmenuDraw();
            break;
        case "r":
        case "e":
            initNMenu(game);
            break;
        case "s":
        case "l":
            closeMenu(game);
            return;
        default:
            break;
    }
}

function nmenuController(key, game) {
    switch(key) {
        case "d":
            nmode += 1;
            if (NMENU.length -1 < nmode) nmode = 0;
            nmenuDraw();
            break;
        case "u":
            nmode -= 1;
            if (nmode < 0) nmode = NMENU.length -1;
            nmenuDraw();
            break;
        case "r":
        case "e":
            break;
        case "s":
        case "l":
            closeNMenu();
            return;
        default:
            break;
    }
}
