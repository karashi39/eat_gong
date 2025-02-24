class Battle {
    e;
    step = 0;

    encount(game) {
        this.step += 1;
        if ((this.step * 0.01) < Math.random()) {
            return;
        }
        this.step = 0;
        this.init(game);
    }

    init(game) {
        game.controller.state = 'battle';
        this.e = ENEMY[Math.floor(Math.random() * (ENEMY.length -1))];
        $("#enemy").text(this.e.image);
        $("#battle").show();
        $("#enemy").show();

        game.sys.init(this.e.name + "があらわれた！");
        game.sys.next = () => {
            this.judge(game);
        }
    }

    judge(game) {
        if (true) {
            $("#enemy").text("");
            game.sys.init(this.e.name + "をたおした！\n" + this.e.e + "のけいけんちと" + this.e.g + "ゴールドをかくとく");
            this.win(game);
            game.sys.next = () => {
                $("#battle").hide();
                $("#enemy").hide();
                game.controller.state = 'map';
            }
        }
    }

    win(game) {
        game.player.param.e += this.e.e;
        game.player.param.g += this.e.g;
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
