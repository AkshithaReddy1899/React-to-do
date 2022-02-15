import React from 'react';
import PropTypes from 'prop-types';

const Todoitem = (props) => {
  const { task } = props;
  return (
    <div>
      <li key={task.id}>
        {task.title}
      </li>
    </div>
  );
};

Todoitem.defaultProps = {
  task: [],
};

Todoitem.propTypes = {
  task: PropTypes.objectOf(PropTypes.any),
};

export default Todoitem;
