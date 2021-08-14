export default function FlagUpdate(e, x, y, board, setBoard, flagCount, setFlagCount, gameOver, correctFlagPlaced, setCorrectFlagPlaced) {
    e.preventDefault();
    let newBoard = JSON.parse(JSON.stringify(board));
    if (!gameOver || !newBoard[x][y].revealed) {
        if (!newBoard[x][y].flagged && flagCount) {
            newBoard[x][y].flagged = true;
            flagCount--;
            if (newBoard[x][y].minePresent) correctFlagPlaced++;
        } else if (newBoard[x][y].flagged) {
            newBoard[x][y].flagged = false;
            if (newBoard[x][y].minePresent) correctFlagPlaced--;
            flagCount++;
        }
        console.log("Flags Left " + flagCount);
        setFlagCount(flagCount);
        setBoard(newBoard);
        setCorrectFlagPlaced(correctFlagPlaced);
    }
}
