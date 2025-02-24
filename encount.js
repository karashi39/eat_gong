function encount(wmap_step) {
    if ((wmap.step * 0.01) < Math.random()) {
        return;
    }
    battleInit();
    wmap.step = 0;
}

function battleInit() {
    D.ctl = 'battle';

    e = ENEMY[Math.floor(Math.random() * (ENEMY.length -1))];
    $("#enemy").text(e.image);
    $("#battle").show();
    $("#enemy").show();

    smsg(e.name + "があらわれた！");
    D.next = () => {
        $("#enemy").text("");
        smsg(e.name + "をたおした！");
        D.next = () => {
            $("#battle").hide();
            $("#enemy").hide();
            D.ctl = 'map';
        }
    }
}

function battleController(key) {
    switch(key) {
        case "d":
            break;
        case "u":
            break;
        case "r":
        case "e":
            break;
        case "s":
        case "l":
            return;
        default:
            break;
    }
}
