import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [playerOne, setPlayerOne] = useState('X');

  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="cell">
          <div className="cell-content">
            
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            
          </div>
        </div>
      </div>
    </div>
    <h1>
    Current Player: {playerOne}
    </h1>
  </div>
  );
}

export default App;
