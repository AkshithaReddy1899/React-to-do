import React, { Component } from 'react';
import propTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { addTodoProps } = this.props;
    const { title } = this.state;
    e.preventDefault();
    addTodoProps(title);
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Task..."
          value={title}
          onChange={this.onChange}
        />
        <button type="submit" onClick={(e) => this.handleSubmit(e)}>Add</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: propTypes.func,
};

InputTodo.defaultProps = {
  addTodoProps: null,
};

export default InputTodo;
