import React, { useEffect } from "react";

export default function GameEnd({ gameOver, setGameOver, correctFlagPlaced, mineLocation, timer }) {
    const mines = mineLocation.length;
    useEffect(() => {
        if (mines === correctFlagPlaced && mines !== 0) setGameOver(true);
        if (gameOver) {
            setTimeout(() => {
                const l = document.getElementsByClassName("gameEnd")[0];
                l.style.setProperty("--visibility", "visible");
            }, 500);
        }
    });
    return (
        <div
            className={`gameEnd 
            ${gameOver ? "render" : ""}`}
        >
            <h2 className='menuHeading' style={{ fontWeight: "300" }}>{`${
                correctFlagPlaced === mines ? `You Won! Time : ${timer}` : `Better Luck Next Time`
            }`}</h2>
            <div
                className='button'
                onClick={() => {
                    window.location.reload(false);
                }}
            >
                Play Again
            </div>
        </div>
    );
}
