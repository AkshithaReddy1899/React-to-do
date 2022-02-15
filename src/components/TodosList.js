import React, { Component } from 'react';
import propTypes from 'prop-types';
import './App.css';
import TodoItem from './TodoItem';

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      todos, handleChangeProps, delTodoProps, setUpdate,
    } = this.props;
    return (
      todos.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          handleChangeProps={handleChangeProps}
          delTodoProps={delTodoProps}
          setUpdate={setUpdate}
        />
      ))
    );
  }
}

TodosList.propTypes = {
  todos: propTypes.instanceOf(Array).isRequired,
  handleChangeProps: propTypes.func.isRequired,
  delTodoProps: propTypes.func.isRequired,
  setUpdate: propTypes.func.isRequired,
};

export default TodosList;
