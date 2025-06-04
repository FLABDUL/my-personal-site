// src/components/Counter.tsx
import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Side effect: runs on first render + every count change
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
