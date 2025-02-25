$(document).ready(() => {
    game = new Game();
    game.init();
    $(document).keydown((event) => {
        game.controller.input(event.which, game);
    });
});
