import React from "react";
import FlagUpdate from "./FlagUpdate";
import Reveal from "./Reveal";
import flag from "../assets/flag.png";
import mine from "../assets/mine.png";

export default function IndividualCell({
    cell,
    board,
    setBoard,
    flagCount,
    setFlagCount,
    mineLocation,
    gameOver,
    setGameOver,
    correctFlagPlaced,
    setCorrectFlagPlaced,
}) {
    const rightClick = (e) => {
        FlagUpdate(
            e,
            cell.x,
            cell.y,
            board,
            setBoard,
            flagCount,
            setFlagCount,
            gameOver,
            correctFlagPlaced,
            setCorrectFlagPlaced
        );
        console.log("Right Click");
    };

    const leftClick = () => {
        Reveal(cell.x, cell.y, board, setBoard, mineLocation, flagCount, setFlagCount, gameOver, setGameOver);
        console.log("Left Click");
    };

    return (
        <div
            className='boxContent'
            onClick={() => {
                if (!cell.flagged) leftClick();
            }}
            onContextMenu={rightClick}
        >
            {!cell.revealed && cell.flagged
                ? <div className = "imageHolder"><img src = {flag} alt = "flag"/></div>
                : cell.revealed
                ? cell.minePresent
                    ? <div className = "imageHolder"><img src = {mine} alt = "mine"/></div>
                    : cell.value !== 0
                    ? cell.value
                    : ""
                : ""}
        </div>
    );
}
