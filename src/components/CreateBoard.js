export default function CreateBoard(row, column, mines, setBoard, setMineLocation, setTimer) {
    let board = [];
    let mineLocation = [];

    for (let x = 0; x < row; x++) {
        let col = [];
        for (let y = 0; y < column; y++) {
            col.push({
                x: x,
                y: y,
                flagged: false,
                minePresent: false,
                revealed: false,
                value: 0,
            });
        }
        board.push(col);
    }

    while (mines) {
        let x = Math.floor(Math.random() * row);
        let y = Math.floor(Math.random() * column);
        if (!board[x][y].minePresent) {
            board[x][y].minePresent = true;
            mineLocation.push([x, y]);
            mines--;
        }
    }

    const validCoords = (x, y) => {
        if (x >= 0 && x < row && y >= 0 && y < column) return true;
        return false;
    };

    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
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

            if (board[x][y].minePresent) continue;

            for (let i = 0; i < dir.length; i++)
                if (validCoords(dir[i][0], dir[i][1]) && board[dir[i][0]][dir[i][1]].minePresent) board[x][y].value++;
        }
    }

    setTimeout(() => {
        setTimer(0)
    }, 800);
    setBoard(board);
    setMineLocation(mineLocation);
    console.log("Board " + row + "X" + column);
}
