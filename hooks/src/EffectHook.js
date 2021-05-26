import React, { useState, useEffect } from 'react';

const EffectHook = () => {
  const [count, setCount] = useState(0);
  
  // react needs to do something after render
  useEffect(() => {
    document.title = `You clicked ${count} times`
    return () => { // component will unmount
      // clean up work can be done inside this func
      alert(count);
    };
  }, [count]); // only render when count changes

  // class equivalent - because most of the times we need to do same thing when component is first rendered or updated

  // componentDidMount() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }
  // componentDidUpdate() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default EffectHook;