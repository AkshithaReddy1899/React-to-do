import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const {
      task, handleChangeProps, delTodoProps, setUpdate,
    } = this.props;
    const { completed, id, title } = task;
    const { editing } = this.state;
    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li key={id} className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <div className="task-container">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleChangeProps(id)}
            />
            <button
              type="button"
              onClick={() => delTodoProps(id)}
            >
              Delete
            </button>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
          </div>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdateDone}
        />
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
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
