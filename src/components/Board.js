import React, { useEffect } from "react";
import IndividualCell from "./IndividualCell";

import flag from "../assets/flag.png";

export default function Board({
    board,
    setBoard,
    rows,
    columns,
    mineLocation,
    flagCount,
    setFlagCount,
    gameOver,
    setGameOver,
    correctFlagPlaced,
    setCorrectFlagPlaced,
}) {
    const size = () => {
        if (columns <= 10 && rows <= 10) {
            return "large";
        } else if (columns < 20 && rows < 20) return "medium";
        else return "small";
    };

    useEffect(() => {
        if (board.length !== 0) {
            const l = document.getElementsByClassName("renderBoard")[0];
            l.style.setProperty("--visibility", "visible");
        }
    }, [board]);

    return (
        <div className={`${board.length !== 0 ? "renderBoard" : ""}`}>
            <div className='showFlagCount'>
                <div className='imageHolder'>
                    <img src={flag} alt={flag} style={{ height: "1.5em" }} />
                </div>
                : {flagCount}
            </div>
            <div className='board'>
                {board.map((rows, indexR) => {
                    return (
                        <div className='row' key={indexR}>
                            {rows.map((columns, indexC) => {
                                return (
                                    <div
                                        key={indexR * 10 + indexC}
                                        className={`cell  
                                    ${(indexR + indexC) % 2 ? "Even" : "Odd"}
                                    ${columns.revealed ? "Revealed" : "Unrevealed"}
                                    ${columns.revealed && columns.minePresent ? "MinePresent" : "MineNotPresent"}
                                    ${size()}`}
                                    >
                                        <IndividualCell
                                            cell={columns}
                                            board={board}
                                            setBoard={setBoard}
                                            flagCount={flagCount}
                                            setFlagCount={setFlagCount}
                                            mineLocation={mineLocation}
                                            gameOver={gameOver}
                                            setGameOver={setGameOver}
                                            correctFlagPlaced={correctFlagPlaced}
                                            setCorrectFlagPlaced={setCorrectFlagPlaced}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
