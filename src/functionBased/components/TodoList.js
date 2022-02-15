import React from 'react';
import PropTypes from 'prop-types';
import Todoitem from './Todoitem';

const TodosList = (props) => {
  const {
    todos, handleChangeProps, delTodoProps, setUpdate,
  } = props;

  console.log(todos);

  return (
    <ul>
      {todos.map((task) => (
        <Todoitem
          key={task.id}
          task={task}
          handleChangeProps={handleChangeProps}
          delTodoProps={delTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any),
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

TodosList.defaultProps = {
  todos: [],
};

export default TodosList;
