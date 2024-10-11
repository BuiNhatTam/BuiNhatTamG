import React, { useReducer} from 'react';
import Board from './Board';
import "./GameStyles.css"
import { calculateWinner } from '../../helpers';
const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
}    
const gameReducer = (state, action) => {
    switch (action.type) {
        case "CLICK_CELL":{
            const { board, xIsNext } = state;
            const { index, winner } = action.payload;
            if(winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state));
            // boardCopy[index] = state.xIsNext ? 'X' : 'O';
            nextState.board[index] = xIsNext ? 'X' : 'O';
            nextState.xIsNext = !xIsNext;
            return nextState;
        }
        case "RESET_GAME":{
            const nextState2 = JSON.parse(JSON.stringify(action.payload));
            nextState2.board = Array(9).fill(null);  
            nextState2.xIsNext = true;         
            return nextState2;
        }
        default:
            break;
    }
}  
const Gamett = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);
    const [state, dispatch] = useReducer(gameReducer ,initialState);
    // const [state, setState] = useState({
    //     board: Array(9).fill(null),
    //     xIsNext: true
    // });
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        // const boardCopy = [...state.board];
        // if(winner || boardCopy[index]) return;
        dispatch({ type: 'CLICK_CELL', payload: { index, winner, }});
        // boardCopy[index] = state.xIsNext ? 'X' : 'O';
        // console.log(boardCopy[index]);
        // // setBoard(boardCopy);
        // // setXIsNext(!state.xIsNext);
        // setState({
        //     ...state,
        //     board: boardCopy,
        //     xIsNext: !state.xIsNext
        // });
    };
    const handleResetGame = () => {
        // setBoard(Array(9).fill(null));
        // setXIsNext(true);
        dispatch({
            type: 'RESET_GAME',
            payload: initialState
        })
    };
    return (
        <div>
           <Board cells={state.board} onClick={handleClick}></Board>
           <button className='game-reset' onClick={handleResetGame}>Reset Game</button>
           {winner ? <div className='winner'>Winner: {winner}</div> : null}
        </div>
    );
};

export default Gamett;