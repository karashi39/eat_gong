class Battle {
    e;
    step = 0;

    encount() {
        this.step += 1;
        if ((this.step * 0.01) < Math.random()) {
            return;
        }
        this.step = 0;
        battle.init();
    }

    init() {
        D.ctl = 'battle';
        this.e = ENEMY[Math.floor(Math.random() * (ENEMY.length -1))];
        $("#enemy").text(this.e.image);
        $("#battle").show();
        $("#enemy").show();

        smsg(this.e.name + "があらわれた！");
        D.next = () => {
            this.judge();
        }
    }

    judge() {
        if (true) {
            $("#enemy").text("");
            smsg(this.e.name + "をたおした！");
            D.next = () => {
                $("#battle").hide();
                $("#enemy").hide();
                D.ctl = 'map';
            }
        }
    }

    battleController(key) {
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
}
