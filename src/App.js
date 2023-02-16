import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  }

  const decrement = () => {
    setValue(value - 1);
  }

  return (
    <div className='container'>

      <h2>Counter</h2>
      <p>{value >= 0 ? value : "Only Positive Integer Accepted."}</p>
      <button type="submit" className="btn" onClick={increment}>Increment</button>
      <button type="submit" className="btn" onClick={decrement}>decrement</button>

    </div>
  );
}

export default App;