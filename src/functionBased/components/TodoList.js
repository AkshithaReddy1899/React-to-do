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
