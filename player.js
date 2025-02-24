class Player {
    param = { l: 1, h: 20, m: 0, p: 8, d: 6, s: 4, e: 0, g: 0 };
    check() {
        if (this.param.h <= 0) {
            gameover();
        }
    }
    param_list() {
        let contents = [];
        contents.push("\tLv :\t\t" + this.param.l);
        contents.push("\tHP :\t\t" + this.param.h);
        contents.push("\tMP :\t\t" + this.param.m);
        contents.push("\tちから :\t" + this.param.p);
        contents.push("\tまもり :\t" + this.param.d);
        contents.push("\tすばやさ :\t" + this.param.s);
        contents.push("\tけいけん :\t" + this.param.e);
        contents.push("\tゴールド :\t" + this.param.g);
        return contents
    }
    jumon_list() {
        return [];
    }
}
