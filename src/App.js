import React from 'react';

const App = () => {
  function handleClick(e) {
    console.log('button click')
  }
  return (
    <>
    <h1>Today's Tasks</h1>
    <li>A task</li>
    <input placeholder="enter your task here"/> <button onClick={handleClick()}>Submit</button>
    </>
  );
};

export default App;
