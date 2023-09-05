import React from "react";
import { Square } from "../square/square";
import './board.css';

export function Board() {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = React.useState(true);

    const handleClick = (i) => {
        const mySquares =squares.slice();
        mySquares[i] = xIsNext ? 'X' : 'O';
        setSquares(mySquares);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i) => {
      return <Square value={squares[i]} onClick={() => handleClick(i)}/>;
    }

    const status = 'Next player: ' + (xIsNext? 'X': 'O');

    return (
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </div>
    );
  
}
