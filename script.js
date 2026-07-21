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
    return {boardArr};
})();

// player factory function
function createPlayer(name) {
    const playerName = name;
    let points = 0;
    const playerPoints = () => points;
    const playerVictory = () => {
        points++;
    }
    return {playerName, playerPoints, playerVictory};
}

// function to record a move on gameBoard
function recordMove(playerSymbol, y, x) {  
    // ROWS are "y", COLUMNS are "x" so [0][0] is top left,
    //  [2][2] is bottom right
    // Checks if this square is free, if not "you can't park there"
    if(!gameBoard.boardArr[y][x]) {
        gameBoard.boardArr[y][x] = playerSymbol;
    }
    else {
        console.log("You can't park that there mate");
    }
};

// After every move, we have to check for a win
function checkForWin() {
    let win = false;
    const rows = gameBoard.boardArr.length;
    const columns = gameBoard.boardArr[0].length;
    console.log(rows, columns);

    // checks for equality in a column
    for(let i = 1; i < (rows - 1); i++) {
        for(let j = 0; j < columns; j++) {
            if(gameBoard.boardArr[i][j] === gameBoard.boardArr[i-1][j] &&
            gameBoard.boardArr[i][j] === gameBoard.boardArr[i+1][j]) {
                if(gameBoard.boardArr[i][j] === undefined)
                    break;
                console.log("We found 3 in a column!")
            };
        };
    };
    // checks for equality in a row
    for(let i = 0; i < rows; i++) {
        for(let j = 1; j < (columns -1); j++) {
            if(gameBoard.boardArr[i][j] === gameBoard.boardArr[i][j-1] &&
            gameBoard.boardArr[i][j] === gameBoard.boardArr[i][j+1]) {
                if(gameBoard.boardArr[i][j] === undefined)
                    break;
                console.log("We found 3 in a row!")
            };
        };
    };
    //checks for diagonal equality
    for(let i = 1; i < (rows - 1); i++) {
        for(let j = 1; j < (columns -1); j++) {
            if(gameBoard.boardArr[i][j] === gameBoard.boardArr[i-1][j-1] &&
            gameBoard.boardArr[i][j] === gameBoard.boardArr[i+1][j+1]) {
                if(gameBoard.boardArr[i][j] === undefined)
                    break;
                console.log("We found 3 diagonally")
            };
            if(gameBoard.boardArr[i][j] === gameBoard.boardArr[i-1][j+1] &&
            gameBoard.boardArr[i][j] === gameBoard.boardArr[i+1][j-1]) {
                if(gameBoard.boardArr[i][j] === undefined)
                    break;
                console.log("We found 3 diagonally")
            };
        };
    };
};


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
recordMove("X", 0, 0);
recordMove("P", 0, 1);
recordMove("X", 0, 2);

recordMove("X", 1, 0);
recordMove("R", 1, 1);
recordMove("E", 1, 2);

recordMove(undefined, 2, 0);
recordMove(undefined, 2, 1);
recordMove(undefined, 2, 2);
console.log(gameBoard.boardArr);
checkForWin();
