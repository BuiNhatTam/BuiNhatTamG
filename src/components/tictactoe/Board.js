import React from 'react';
import Cell from './Cell';
import { calculateWinner } from '../../helpers';

const Board = ({ cells, onClick }) => {
    // const cells =[null,null,null,"X","X","X",null,null,null];
    // console.log(calculateWinner(cells)); 
    return (
        <div className='game-board'>
        {cells.map((item, index) => (
            <Cell key={index} value={item} onClick={() => onClick(index)}
            className={item === 'X' ? 'is-x' : item === 'O' ? 'is-o' : ''}>
                
            </Cell>
        ))}
        </div>
    );
};

export default Board;