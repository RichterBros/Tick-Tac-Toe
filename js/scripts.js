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
        event.preventDefault();
        newGameBoard.updateSquare1();
        newGameBoard.winCheck();
    });

    $("#2").click(function (event) {
        event.preventDefault();
        newGameBoard.updateSquare2();
        newGameBoard.winCheck();
    });

    $("#3").click(function (event) {
        event.preventDefault();
        newGameBoard.updateSquare3();
        newGameBoard.winCheck();
    });

    $("#4").click(function (event) {
        event.preventDefault();
        newGameBoard.updateSquare4();
        newGameBoard.winCheck();
    });

    $("#5").click(function (event) {
        event.preventDefault();
        newGameBoard.updateSquare5();
        newGameBoard.winCheck();
    });

    $("#6").click(function (event) {
        event.preventDefault();
        newGameBoard.updateSquare6();
        newGameBoard.winCheck();
    });

    $("#7").click(function (event) {
        event.preventDefault();
        newGameBoard.updateSquare7();
        newGameBoard.winCheck();
    });

    $("#8").click(function (event) {
        event.preventDefault();
        newGameBoard.updateSquare8();
        newGameBoard.winCheck();
    });

    $("#9").click(function (event) {
        event.preventDefault();
        newGameBoard.updateSquare9();
        newGameBoard.winCheck();
    });
});

function PlayerBook() {
    this.players = []
}

var playerBook = new PlayerBook();

function Player(name, playerSymbol) {
    this.name = name;
    this.symbol = playerSymbol;
}
PlayerBook.prototype.addPlayer = function (player) {
    this.players.push(player)
}

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
Row.prototype.winCheck = function () {
    if (turn >= 5) {
        if (newGameBoard.value1 === "X" && newGameBoard.value2 === "X" && newGameBoard.value3 === "X" ||
            newGameBoard.value1 === "O" && newGameBoard.value2 === "O" && newGameBoard.value3 === "O" ||
            newGameBoard.value4 === "X" && newGameBoard.value5 === "X" && newGameBoard.value6 === "X" ||
            newGameBoard.value4 === "O" && newGameBoard.value5 === "O" && newGameBoard.value6 === "O" ||
            newGameBoard.value7 === "X" && newGameBoard.value8 === "X" && newGameBoard.value9 === "X" ||
            newGameBoard.value7 === "O" && newGameBoard.value8 === "O" && newGameBoard.value9 === "O" ||

            newGameBoard.value1 === "X" && newGameBoard.value4 === "X" && newGameBoard.value7 === "X" ||
            newGameBoard.value1 === "O" && newGameBoard.value4 === "O" && newGameBoard.value7 === "O" ||
            newGameBoard.value2 === "X" && newGameBoard.value5 === "X" && newGameBoard.value8 === "X" ||
            newGameBoard.value2 === "O" && newGameBoard.value5 === "O" && newGameBoard.value8 === "O" ||
            newGameBoard.value3 === "X" && newGameBoard.value6 === "X" && newGameBoard.value9 === "X" ||
            newGameBoard.value3 === "O" && newGameBoard.value6 === "O" && newGameBoard.value9 === "O" ||

            newGameBoard.value1 === "X" && newGameBoard.value5 === "X" && newGameBoard.value9 === "X" ||
            newGameBoard.value1 === "O" && newGameBoard.value5 === "O" && newGameBoard.value9 === "O" ||

            newGameBoard.value3 === "X" && newGameBoard.value5 === "X" && newGameBoard.value7 === "X" ||
            newGameBoard.value3 === "O" && newGameBoard.value5 === "O" && newGameBoard.value7 === "O") {
            alert("Player" + temporarysymbol + " " + "Wins the game!")
        }

        if (turn === 9) {
            if
                (newGameBoard.value1 === "X" && newGameBoard.value2 === "X" && newGameBoard.value3 === "X" ||
                newGameBoard.value1 === "O" && newGameBoard.value2 === "O" && newGameBoard.value3 === "O" ||
                newGameBoard.value4 === "X" && newGameBoard.value5 === "X" && newGameBoard.value6 === "X" ||
                newGameBoard.value4 === "O" && newGameBoard.value5 === "O" && newGameBoard.value6 === "O" ||
                newGameBoard.value7 === "X" && newGameBoard.value8 === "X" && newGameBoard.value9 === "X" ||
                newGameBoard.value7 === "O" && newGameBoard.value8 === "O" && newGameBoard.value9 === "O" ||

                newGameBoard.value1 === "X" && newGameBoard.value4 === "X" && newGameBoard.value7 === "X" ||
                newGameBoard.value1 === "O" && newGameBoard.value4 === "O" && newGameBoard.value7 === "O" ||
                newGameBoard.value2 === "X" && newGameBoard.value5 === "X" && newGameBoard.value8 === "X" ||
                newGameBoard.value2 === "O" && newGameBoard.value5 === "O" && newGameBoard.value8 === "O" ||
                newGameBoard.value3 === "X" && newGameBoard.value6 === "X" && newGameBoard.value9 === "X" ||
                newGameBoard.value3 === "O" && newGameBoard.value6 === "O" && newGameBoard.value9 === "O" ||

                newGameBoard.value1 === "X" && newGameBoard.value5 === "X" && newGameBoard.value9 === "X" ||
                newGameBoard.value1 === "O" && newGameBoard.value5 === "O" && newGameBoard.value9 === "O" ||

                newGameBoard.value3 === "X" && newGameBoard.value5 === "X" && newGameBoard.value7 === "X" ||
                newGameBoard.value3 === "O" && newGameBoard.value5 === "O" && newGameBoard.value7 === "O") {
                alert("Player" + temporarysymbol + " " + "Wins the game!")
            }
            else {
                alert("Tie game!")
                newGameBoard = ("", "", "", "", "", "", "", "", "");
                turn = 0;
            }
        }
    }
}

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

    Row.prototype.updateSquare7 = function (value) {
        if (turn % 2 === 0) {
            temporarysymbol = "X"
        }
        else {
            temporarysymbol = "O"
        }
        if (this.value7 === "") {
            newGameBoard.value7 = temporarysymbol
            turn++
            $("#7").html(temporarysymbol);
        }
        else {
            alert("space already taken. choose again")
        }
    }

    Row.prototype.updateSquare8 = function (value) {
        if (turn % 2 === 0) {
            temporarysymbol = "X"
        }
        else {
            temporarysymbol = "O"
        }
        if (this.value8 === "") {
            newGameBoard.value8 = temporarysymbol
            turn++
            $("#8").html(temporarysymbol);
        }
        else {
            alert("space already taken. choose again")
        }
    }
    Row.prototype.updateSquare9 = function (value) {
        if (turn % 2 === 0) {
            temporarysymbol = "X"
        }
        else {
            temporarysymbol = "O"
        }
        if (this.value9 === "") {
            newGameBoard.value9 = temporarysymbol
            turn++
            $("#9").html(temporarysymbol);
        }
        else {
            alert("space already taken. choose again")
        }
    }

    turn = 0;