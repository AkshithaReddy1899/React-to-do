import React, { PureComponent } from 'react';
import './App.css';
import TodoContainer from './TodoContainer';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
