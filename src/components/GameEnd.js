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
            {correctFlagPlaced === mines ? (
                <p className='gameEndHeading'>
                    {`You Won!`}
                    <br /> {`Time: ${timer}`}
                </p>
            ) : (
                <p className='gameEndHeading'>Better Luck Next Time!</p>
            )}
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
