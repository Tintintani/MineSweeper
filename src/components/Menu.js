import React, { useEffect, useState } from "react";
import CreateBoard from "./CreateBoard";

export default function Menu({ setBoard, setRows, setColumns, setMineLocation, setFlagCount, correctFlagPlaced }) {
    const [visibility, setVisibility] = useState(true);
    const handleClick = (rows, columns, mines) => {
        CreateBoard(rows, columns, mines, setBoard, setMineLocation, correctFlagPlaced);
        setFlagCount(mines);
        setVisibility(false);
        setRows(rows);
        setColumns(columns);
    };
    useEffect(() => {}, []);

    return (
        <div className={`Menu ${visibility ? "visible" : "hidden"}`}>
            <h1 className='menuHeading'>Choose Grid Size</h1>
            <div
                className='button'
                onClick={() => {
                    handleClick(10, 10, 15);
                }}
            >
                10 X 10
            </div>
            <div
                className='button'
                onClick={() => {
                    handleClick(15, 15, 35);
                }}
            >
                15 X 15
            </div>
            <div
                className='button'
                onClick={() => {
                    handleClick(20, 20, 60);
                }}
            >
                20 X 20
            </div>
        </div>
    );
}
