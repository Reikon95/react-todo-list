import React from 'react';
// import addToDo from './addToDo';

let array = ['wash car', 'do dishes']

const App = () => {
  function addToDo(e) {
    array.push('new task')
    console.log(array)
  }
  return (
    <>
    <h1>Today's Tasks</h1>
    <form>
    <input type="text" placeholder="enter your task here"/> 
    </form>
    </>
  );
};

export default App;
