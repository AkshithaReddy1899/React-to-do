import Todoitem from './Todoitem';

const TodoList = (props) => {
  const { todos } = props;

  return (
    todos.map((task) => (
      <Todoitem key={task.id} task={task} />
    ))
  );
};

export default TodoList;

/* import React, { Component } from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos } = this.props;
    console.log(todos);
    return (
      todos.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))
    );
  }
}

TodosList.propTypes = {
  todos: propTypes.instanceOf(Array).isRequired,
};

export default TodosList;
*/
