$(document).ready(function () {
    $("form#player1Form").submit(function (event) {
        event.preventDefault();
        var player1Name = $("input#player1Name").val();
        var player1Symbol = $("input#player1Symbol").val();
        var newPlayer1 = new Player(player1Name, player1Symbol);
        playerBook.addPlayer(newPlayer1);

        var player2Name = $("input#player2Name").val();
        var player2Symbol = $("input#player2Symbol").val();
        var newPlayer2 = new Player(player2Name, player2Symbol);
        playerBook.addPlayer(newPlayer2);
        // console.log(newPlayer1,  newPlayer2, playerBook)
    });
    function PlayerBook() {
        this.players = []
    }
    var playerBook = new PlayerBook();

    function Player(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
    PlayerBook.prototype.addPlayer = function (player) {
        this.players.push(player)
    }
});