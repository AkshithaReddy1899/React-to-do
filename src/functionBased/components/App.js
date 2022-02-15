import { Routes, Route } from 'react-router-dom';
import '../App.css';
import TodoContainer from './TodoContainer';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
