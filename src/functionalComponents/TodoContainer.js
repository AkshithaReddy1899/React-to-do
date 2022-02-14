// Header, InputTodo, TodosList, NAvbar

import TodosList from './TodoList';

const TodoContainer = () => {
  const state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };
  return (
    <div>
      awdesfrdgtfyg
      {console.log(state.todos)}
      <TodosList todos={state.todos} />
    </div>
  );
};

/*
class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodosList todos={todos} />
      </div>
    );
  }
}
*/
export default TodoContainer;
