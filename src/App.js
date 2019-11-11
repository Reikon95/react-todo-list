import React from 'react';

let array = ['wash car', 'do dishes']

const App = () => {
  function handleClick(e) {
    console.log('button click')
  }
  return (
    <>
    <h1>Today's Tasks</h1>
    <li>A task</li>
    <li>{array[array.length - 1]}</li>
    <input placeholder="enter your task here"/> <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default App;
