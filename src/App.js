import React from 'react';
// import addToDo from './addToDo';

let array = ['wash car', 'do dishes']

const App = () => {
  function addToDo(e) {
    e.preventDefault();
    console.dir(this.refs.task.value);
  }
  return (
    <>
    <h1>Today's Tasks</h1>
    <form onSubmit={this.addToDo}>
    <input type="text" placeholder="enter your task here" ref="task"/> 
    </form>
    </>
  );
};

export default App;
