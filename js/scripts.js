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
        console.log(newPlayer1, newPlayer2, playerBook)
    });

// CLICK FUNCTIONS

    $("#1").click(function (event) {
        // (newGameBoard.value1).("test");
        event.preventDefault();
        newGameBoard.updateSquare1();
        console.log(newGameBoard.value1);
        console.log(newGameBoard);
        console.log(turn);

    });

    $("#2").click(function (event) {
        ;
        // (newGameBoard.value1).("test");
        event.preventDefault();
        newGameBoard.updateSquare2();
        console.log(newGameBoard.value2);
        console.log(newGameBoard);
        console.log(turn);

    });
    $("#3").click(function (event) {
        ;
        // (newGameBoard.value1).("test");
        event.preventDefault();
        newGameBoard.updateSquare3();
        console.log(newGameBoard.value3);
        console.log(newGameBoard);
        console.log(turn);

    });
    $("#4").click(function (event) {
        ;
        // (newGameBoard.value1).("test");
        event.preventDefault();
        newGameBoard.updateSquare4();
        console.log(newGameBoard.value4);
        console.log(newGameBoard);
        console.log(turn);

    });
    $("#5").click(function (event) {
        ;
        // (newGameBoard.value1).("test");
        event.preventDefault();
        newGameBoard.updateSquare5();
        console.log(newGameBoard.value5);
        console.log(newGameBoard);
        console.log(turn);

    });
    $("#6").click(function (event) {
        ;
        // (newGameBoard.value1).("test");
        event.preventDefault();
        newGameBoard.updateSquare6();
        console.log(newGameBoard.value6);
        console.log(newGameBoard);
        console.log(turn);

    });
});

function PlayerBook() {
    this.players = []
}

var playerBook = new PlayerBook();
//var squareSymbol = $('#1').attr('id');

function Player(name, playerSymbol) {
    this.name = name;
    this.symbol = playerSymbol;
}
PlayerBook.prototype.addPlayer = function (player) {
    this.players.push(player)
}
// function Square(squareSymbol) {
//     this.symbol = "";
// }

function Row(value1, value2, value3, value4, value5, value6, value7, value8, value9) {
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
}

var newGameBoard = new Row("", "", "", "", "", "", "", "", "");


// ALL OF THE PROTOTYPES THAT UPDATE newGameBoard as well as update DOM


Row.prototype.updateSquare1 = function (value) {
    if (turn % 2 === 0) {
        temporarysymbol = "X"
    }
    else {
        temporarysymbol = "O"
    }
    if (this.value1 === "") {
        newGameBoard.value1 = temporarysymbol
        turn++
        $("#1").html(temporarysymbol);
    }
    else {
        alert("space already taken. choose again")
    }
}

Row.prototype.updateSquare2 = function (value) {
    if (turn % 2 === 0) {
        temporarysymbol = "X"
    }
    else {
        temporarysymbol = "O"
    }
    if (this.value2 === "") {
        newGameBoard.value2 = temporarysymbol
        turn++
        $("#2").html(temporarysymbol);
    }
    else {
        alert("space already taken. choose again")
    }
}

Row.prototype.updateSquare3 = function (value) {
    if (turn % 2 === 0) {
        temporarysymbol = "X"
    }
    else {
        temporarysymbol = "O"
    }
    if (this.value3 === "") {
        newGameBoard.value3 = temporarysymbol
        turn++
        $("#3").html(temporarysymbol);
    }
    else {
        alert("space already taken. choose again")
    }
}

Row.prototype.updateSquare4 = function (value) {
    if (turn % 2 === 0) {
        temporarysymbol = "X"
    }
    else {
        temporarysymbol = "O"
    }
    if (this.value4 === "") {
        newGameBoard.value4 = temporarysymbol
        turn++
        $("#4").html(temporarysymbol);
    }
    else {
        alert("space already taken. choose again")
    }
}

Row.prototype.updateSquare5 = function (value) {
    if (turn % 2 === 0) {
        temporarysymbol = "X"
    }
    else {
        temporarysymbol = "O"
    }
    if (this.value5 === "") {
        newGameBoard.value5 = temporarysymbol
        turn++
        $("#5").html(temporarysymbol);
    }
    else {
        alert("space already taken. choose again")
    }
}

Row.prototype.updateSquare6 = function (value) {
    if (turn % 2 === 0) {
        temporarysymbol = "X"
    }
    else {
        temporarysymbol = "O"
    }
    if (this.value6 === "") {
        newGameBoard.value6 = temporarysymbol
        turn++
        $("#6").html(temporarysymbol);
    }
    else {
        alert("space already taken. choose again")
    }
}

turn = 0;

    // function GameBoard() {

    //     row1 = [new Square(),new Square(),new Square(), new Square(),new Square(),new Square(), new Square(),new Square(),new Square()];
    // }

    // var gameboard = new GameBoard();
// });