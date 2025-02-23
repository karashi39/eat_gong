function encount(wmap_step) {
    if ((wmap.step * 0.01) < Math.random()) {
        return;
    }
    console.log("敵と遭遇した！");
    wmap.step = 0;
}
