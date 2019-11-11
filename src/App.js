import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, content: 'walk dog'},
        {id: 2, content: 'make fajitas'},
        {id: 3, content: 'contemplate life'}
      ]      
    };
  }
  render() {
    return (
      <>
      The first task is {this.state.todos[0].content}
      </>
    );
  }
}
export default App;
