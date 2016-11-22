import React from 'react';
import Board from './Board';
import calculateWinner from './CalculateWinner';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    const randy = "https://res.cloudinary.com/taylorwu21/image/upload/v1479768414/randy_agjqos.gif";
    const nhi = "https://res.cloudinary.com/taylorwu21/image/upload/v1479768574/nhi_ny6p1g.gif";
    if(calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? randy : nhi;
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2)? false : true
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if(winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'Randy Face' : 'Nhi Face');
    }

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return(
        <li key={move}>
          <a
            href="#"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </a>
        </li>
      )
    })
    return (
      <div className="row">
        <div className="game-board col s12 m10">
          <Board
            squares={ current.squares }
            onClick={ (i) => this.handleClick(i) }
          />
        </div>
        <div className="game-info col s12 m2">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
