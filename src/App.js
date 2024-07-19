import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={() => increment()}>+</button>
      <h2>{counter}</h2>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}

export default App;
