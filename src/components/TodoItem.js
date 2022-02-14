import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { task } = this.props;
    return (
      <li key={task.id}>
        {task.title}
      </li>
    );
  }
}

TodoItem.defaultProps = {
  task: [],
};

TodoItem.propTypes = {
  task: PropTypes.objectOf(PropTypes.any),
};

export default TodoItem;
