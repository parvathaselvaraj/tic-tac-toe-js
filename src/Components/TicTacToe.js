import React, { useState } from "react";
import _ from "lodash";

function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [cellArray, setCellArray] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [result, setResult] = useState("");

  const checkResult = (checkArray) => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const winningPosition = _.find(winningPositions, (array) => {
      return (
        checkArray[array[0]] === checkArray[array[1]] &&
        checkArray[array[1]] === checkArray[array[2]] &&
        checkArray[array[0]] !== null
      );
    });
    if (winningPosition !== undefined) {
      return checkArray[winningPosition[0]];
    } else {
      if (_.every(checkArray, (array) => array !== null)) {
        return "draw";
      } else {
        return null;
      }
    }
  };

  const handleClick = (e, cellIndex) => {
    setCellArray((array) => {
      const newArray = [...array];
      if (newArray[cellIndex] === null) {
        newArray[cellIndex] = currentPlayer;
        if (currentPlayer === "X") {
          setCurrentPlayer("O");
        } else {
          setCurrentPlayer("X");
        }
      }
      setResult(checkResult(newArray));
      
      return newArray;
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {_.map(cellArray, (el, idx) => {
            return (
              <div key={idx} className="cell">
                <div
                  onClick={(e) => handleClick(e, idx)}
                  className="cell-content"
                >
                  {el}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="play-comment">
        {(result !== null) ? <h1>Result :{result}</h1> : <h1>Current Player:{currentPlayer}</h1>}
      </div>
    </div>
  );
}
export default TicTacToe;