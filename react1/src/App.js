import React, { Component } from 'react';
import Todos from './components/TodoComponents/Todos';
import AddTodo from './components/TodoComponents/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Learn React' },
      { id: 2, content: 'Learn React Native' },
      { id: 3, content: 'Learn Laravel and React' }
    ]
  }

  //  Delete Todo
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
    console.log('Todo Added successfully');
  }

  render() {
    return (
      <div className="App">
        <h3 className="center blue-text">Todo's</h3>
        <div className="todo-app container">
          <AddTodo addTodo={this.addTodo} />
          <br />
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
