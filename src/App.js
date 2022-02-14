import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <TodoContainer />
    </div>
  );
}

export default App;
