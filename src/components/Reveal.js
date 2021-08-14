export default function Reveal(x, y, board, setBoard, mineLocation, flagCount, setFlagCount, gameOver, setGameOver) {
    
    if (!gameOver) {
        let newBoard = [...board];
        const validCoords = (x, y) => {
            if (x >= 0 && x < newBoard.length && y >= 0 && y < newBoard[0].length) return true;
            return false;
        };

        const checkFlag = (x, y) => {
            if (newBoard[x][y].flagged) {
                flagCount++;
                setFlagCount(flagCount);
                console.log("Flag Removed");
                newBoard[x][y].flagged = false;
            }
        };

        const revealingArea = () => {
            let revealedArea = [];
            revealedArea.push([x, y]);

            while (revealedArea.length !== 0) {
                let currentBox = revealedArea.pop();
                let x = currentBox[0];
                let y = currentBox[1];

                let dir = [
                    [x - 1, y - 1],
                    [x - 1, y],
                    [x - 1, y + 1],
                    [x, y - 1],
                    [x, y + 1],
                    [x + 1, y - 1],
                    [x + 1, y],
                    [x + 1, y + 1],
                ];
                checkFlag(x, y);

                if (!newBoard[x][y].revealed) newBoard[x][y].revealed = true;

                if (newBoard[x][y].value !== 0) {
                    break;
                } else if (newBoard[x][y].value === 0) {
                    for (let i = 0; i < dir.length; i++) {
                        if (validCoords(dir[i][0], dir[i][1]) && !newBoard[dir[i][0]][dir[i][1]].revealed) {
                            newBoard[dir[i][0]][dir[i][1]].value === 0
                                ? revealedArea.push([dir[i][0], dir[i][1]])
                                : (newBoard[dir[i][0]][dir[i][1]].revealed = true);
                            checkFlag(dir[i][0], dir[i][1]);
                        }
                    }
                }   
            }
        };

        if (newBoard[x][y].minePresent) {
            for (let i = 0; i < mineLocation.length; i++) newBoard[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
            setGameOver(true);
        } else revealingArea();

        setBoard(newBoard);
    }
}
