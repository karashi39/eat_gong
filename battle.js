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

        sys.init(this.e.name + "があらわれた！");
        sys.next = () => {
            this.judge();
        }
    }

    judge() {
        if (true) {
            $("#enemy").text("");
            sys.init(this.e.name + "をたおした！\n" + this.e.e + "のけいけんちと" + this.e.g + "ゴールドをかくとく");
            this.win();
            sys.next = () => {
                $("#battle").hide();
                $("#enemy").hide();
                D.ctl = 'map';
            }
        }
    }

    win() {
        player.param.e += this.e.e;
        player.param.g += this.e.g;
    }

    controller(key) {
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
