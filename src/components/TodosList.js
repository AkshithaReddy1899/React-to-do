import React, { Component } from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos, handleChangeProps, delTodoProps } = this.props;
    console.log(delTodoProps);
    return (
      todos.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          handleChangeProps={handleChangeProps}
          delTodoProps={delTodoProps}
        />
      ))
    );
  }
}

TodosList.propTypes = {
  todos: propTypes.instanceOf(Array).isRequired,
  handleChangeProps: propTypes.func.isRequired,
  delTodoProps: propTypes.func.isRequired,
};

export default TodosList;
