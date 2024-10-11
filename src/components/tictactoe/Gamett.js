import React, { useState } from 'react';
import Board from './Board';
import "./GameStyles.css"
import { calculateWinner } from '../../helpers';
const Gamett = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        console.log(boardCopy[index]);
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    };
    return (
        <div>
           <Board cells={board} onClick={handleClick}></Board>
           <button className='game-reset' onClick={handleResetGame}>Reset Game</button>
           {winner ? <div className='winner'>Winner: {winner}</div> : null}
        </div>
    );
};

export default Gamett;