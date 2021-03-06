import React, { useState, useEffect } from "react";
import Board from "./Board";
import GameEnd from "./GameEnd";
import Menu from "./Menu";
import "../scss/styles.scss";
import flag from "../assets/flag.png";
import mine from "../assets/mine.png";

export default function App() {
    const [flagCount, setFlagCount] = useState(0);
    const [board, setBoard] = useState([]);
    const [mineLocation, setMineLocation] = useState([]);
    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [correctFlagPlaced, setCorrectFlagPlaced] = useState(0);
    const [timer, setTimer] = useState("0");

    useEffect(() => {}, [gameOver, board]);

    return (
        <div className='App'>
            <Menu
                setBoard={setBoard}
                setRows={setRows}
                setColumns={setColumns}
                setMineLocation={setMineLocation}
                setFlagCount={setFlagCount}
                setTimer={setTimer}
            />
            <div className='mainHeading'>
                <img src={flag} alt='flag' />
                <h1 className='mainHeading'>MineSweeper</h1>
                <img src={mine} alt='mine' />
            </div>
            <Board
                board={board}
                setBoard={setBoard}
                rows={rows}
                columns={columns}
                mineLocation={mineLocation}
                flagCount={flagCount}
                setFlagCount={setFlagCount}
                gameOver={gameOver}
                setGameOver={setGameOver}
                correctFlagPlaced={correctFlagPlaced}
                setCorrectFlagPlaced={setCorrectFlagPlaced}
                timer={timer}
                setTimer={setTimer}
            />
            <GameEnd
                gameOver={gameOver}
                setGameOver={setGameOver}
                correctFlagPlaced={correctFlagPlaced}
                mineLocation={mineLocation}
                timer={timer}
            />
        </div>
    );
}
