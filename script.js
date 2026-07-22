// Creating the Game Board itself
const gameBoard = (() => {
    const rows = 3;
    const columns = 3;
    let boardArr = []
    for(let i = 0; i < rows; i++){
        boardArr[i] = [];
        for(let j = 0; j < columns; j++) {
            boardArr[i][j] = undefined;
        }
    }
    const getBoard = () => boardArr;
    
    // function to record a move on gameBoard
    function recordMove(playerSymbol, y, x) {  
    // ROWS are "y", COLUMNS are "x" so [0][0] is top left,
    //  [2][2] is bottom right
    // Checks if this square is free, if not "you can't park there"
        if(!boardArr[y][x]) {
            boardArr[y][x] = playerSymbol;
        }
        else {
            console.log("You can't park that there mate");
            return;
        }
    };

    const printBoard = () => {
        for (let i = 0; i < boardArr.length; i++) {
            console.log(boardArr[i]);
        }
    }
    return {getBoard, recordMove, printBoard};
})();

// player factory function
function createPlayer(name, symbol) {
    const playerName = name;
    let points = 0;
    let playerSymbol = symbol;
    const getPlayerSymbol = () => playerSymbol;
    const playerPoints = () => points;
    const playerVictory = () => {
        points++;
    }
    return {playerName, getPlayerSymbol, playerPoints, playerVictory};
}

/* gameController is responsible for flow of the game (turns)
 and checking for whether there is a winning pattern on board */
 function gameController() {
    const playerOne = createPlayer("P1", "X") // P1 and P2 are placeholders,
    const playerTwo = createPlayer("P2", "O") // once we make UI, the forms passing in player name will have default values

    let players = []
    players.push(playerOne);
    players.push(playerTwo);
    let activePlayer = players[0]
    
    function switchActive() {
        activePlayer === players[0] ? activePlayer = players[1] : activePlayer = players[0]
        console.log(`${activePlayer.playerName} is now the active player`)
    }

    // After every move, we have to check for a win
    function checkForWin(player) {
        gameboard = gameBoard.getBoard()
        const rows = gameboard.length;
        const columns = gameboard[0].length;

        // checks for equality in a column
        for(let i = 1; i < (rows - 1); i++) {
            for(let j = 0; j < columns; j++) {
                if(gameboard[i][j] === gameboard[i-1][j] &&
                gameboard[i][j] === gameboard[i+1][j]) {
                    if(gameboard[i][j] === undefined)
                        break;
                    console.log("We found 3 in a column!");
                    console.log(`${player} wins!`)
                    return;
                };
            };
        };
        // checks for equality in a row
        for(let i = 0; i < rows; i++) {
            for(let j = 1; j < (columns -1); j++) {
                if(gameboard[i][j] === gameboard[i][j-1] &&
                gameboard[i][j] === gameboard[i][j+1]) {
                    if(gameboard[i][j] === undefined)
                        break;
                    console.log("We found 3 in a row!");
                    console.log(`${player} wins!`)
                    return;
                };
            };
        };
        //checks for diagonal equality
        for(let i = 1; i < (rows - 1); i++) {
            for(let j = 1; j < (columns -1); j++) {
                if(gameboard[i][j] === gameboard[i-1][j-1] &&
                gameboard[i][j] === gameboard[i+1][j+1]) {
                    if(gameboard[i][j] === undefined)
                        break;
                    console.log("We found 3 diagonally");
                    console.log(`${player} wins!`)
                    return;
                };
                if(gameboard[i][j] === gameboard[i-1][j+1] &&
                gameboard[i][j] === gameboard[i+1][j-1]) {
                    if(gameboard[i][j] === undefined)
                        break;
                    console.log("We found 3 diagonally")
                    console.log(`${player} wins!`)
                    return;
                };
            };
        };
    };


    function playRound(y, x) {
        // Reccord a move
        gameBoard.recordMove(activePlayer.getPlayerSymbol(), y, x);
        // Check if anyone won the game
        checkForWin(activePlayer.playerName);
        // If there is no win, game continues
        switchActive();
        gameBoard.printBoard();

    }
    return {playRound};
 }

 const game = gameController();


//2nd crack at the checkForWin function
/*
function checkForWin() {
    const x = gameBoard.boardArr[0].length;
    const y = gameBoard.boardArr.length;
    let controlArr = []

}

function isThisAWin(array) {
    let result = array.every(isSame);
    // function to check is every item of array the same?
    function isSame(el, index, arr) {
        if(index === 0) {
            return true;
        }
        else {
            return el === arr[index -1]
        }
    };
    if(result === true) {
        console.log("Yea this array is the same through and through")
    }
}

*/

//This is to test various board layouts and functions that interact with it
/*
gameBoard.recordMove("X", 0, 0);
gameBoard.recordMove("P", 0, 1);
gameBoard.recordMove("X", 0, 2);

gameBoard.recordMove("X", 1, 0);
gameBoard.recordMove("R", 1, 1);
gameBoard.recordMove("E", 1, 2);


gameBoard.recordMove(undefined, 2, 0);
gameBoard.recordMove(undefined, 2, 1);
gameBoard.recordMove(undefined, 2, 2); 
console.log("Old way")
console.log(gameboard);
console.log("NEW way")
console.log(gameBoard.printBoard());
*/
