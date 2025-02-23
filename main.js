let mode = 'wmap';

function init_game() {
    /* 画面ロード時の処理 */
    $("#system").hide();
    initMap();
    wmapInit();
}

$(document).ready(function() {
    init_game();
    $(document).keydown(function(event) {
        if (mode === 'wmap') {
            wmapController(event.witch);
        }
    });
});
