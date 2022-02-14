import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { task, handleChangeProps, delTodoProps } = this.props;
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.completed} onChange={() => handleChangeProps(task.id)} />
        {task.title}
        <button type="button" onClick={() => delTodoProps(task.id)}>Delete</button>
      </li>
    );
  }
}

TodoItem.defaultProps = {
  task: [],
};

TodoItem.propTypes = {
  task: PropTypes.objectOf(PropTypes.any),
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
