import React from 'react';
// import addToDo from './addToDo';

let array = ['wash car', 'do dishes']

const App = () => {
  function addToDo(e) {
    array.push(e)
  }
  return (
    <>
    <h1>Today's Tasks</h1>
    <li>A task</li>
    <li>{array[array.length - 1]}</li>
    <input placeholder="enter your task here"/> <button onClick={addToDo}>Submit</button>
    </>
  );
};

export default App;
