import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [state, newState] = useState({ age: 20 });

  const increaseAge = () => {
    let age1 = state.age * 2;
    newState({ age: age1 });
  };
  const decreaseAge = () => {
    let age2 = state.age / 2;
    newState({ age: age2 });
  };

  return (
    <div>
      <h1>I am {state.age} years old</h1>
      <button onClick={increaseAge}>increase</button>
      <button onClick={decreaseAge}>decrease</button>
    </div>
  );
}

export default App;
