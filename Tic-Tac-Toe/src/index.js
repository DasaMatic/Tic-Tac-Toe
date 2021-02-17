import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import ContactForm from './ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class Applikacija extends React.Component {
  render() {
    return (
      <Router>

      <div>
        <Header/>
        
        <div className="container ">
            <div className="col-md-6 offset-md-3">
           <Route exact path='/Contact' component={ContactForm}></Route>
          </div>
        </div>
        
        <Route exact path='/Game' component={Game}></Route>
        <Route exact path='/' component={Game}></Route>
      </div>
      </Router>
    );
  }
}


const Square = (props) => {

  const [value, setValue] = useState(null);


  return (
   
    <button className="square"
      onClick={props.onClickEvent}


    >
      {props.value}
    </button>
  );
};

const Board = () => {

  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWiner(squares);


  const status = winner ?
    `Winner: ${winner}` :
    `Next player: ${xIsNext ? 'X' : 'O'}`;


  const renderSquare = (i) => {
    return (
      
      <Square value={squares[i]}
        onClickEvent={() => handleClickEvent(i)}

      />
    );
  };

  const handleClickEvent = (i) => {
    const newSquares = [...squares];

    const winnerDeclared = Boolean(calculateWiner(newSquares));
    const squareFilled = Boolean(newSquares[i]);
    if (winnerDeclared || squareFilled) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div >
      <div className="status">{status}</div>

      <div className="board-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </div>
  );
};
const Game = () => {
  return (
   
    <div className="game"><Board />
     <button type="button" onClick={ refreshPage} className="btn btn-warning"> <span>New Game</span> </button>
    
    </div>
    
  );
};
function refreshPage(){ 
  window.location.reload(); 
}

ReactDOM.render(
  <React.StrictMode>
    <Applikacija />

  </React.StrictMode>,
  document.getElementById('root')
);

function calculateWiner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};


reportWebVitals();
