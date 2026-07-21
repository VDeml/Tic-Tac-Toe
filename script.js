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


recordMove("X", 0, 0);
recordMove("O", 1, 0);
recordMove("X", 2, 2);
recordMove("E", 2, 2);

console.log(gameBoard.boardArr);
console.log(typeof(gameBoard.boardArr[0][2]));