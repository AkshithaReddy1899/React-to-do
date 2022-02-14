// Header, InputTodo, TodosList, NAvbar

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  }

  addTodoItem = (title) => {
    const { todos } = this.state;
    const newTodo = {
      id: uuidv4(),
      title,
      complete: false,
    };
    this.setState({
      todos: [...todos, newTodo],
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            delTodoProps={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
