import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.modules.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { task, handleChangeProps, delTodoProps } = this.props;

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li key={task.id} className="todoitem">
        <div className="task-container">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleChangeProps(task.id)}
          />
          <button
            type="button"
            onClick={() => delTodoProps(task.id)}
          >
            Delete
          </button>
          <span style={task.complete ? completedStyle : null}>
            {this.title}
          </span>
          {task.title}
        </div>
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
