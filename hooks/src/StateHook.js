import React, { useState } from 'react';

const StateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default StateHook;