import './App.css';
import { useGlobalContext } from './Context';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  const { toDos } = useGlobalContext();

  return (
    <div className="app">
      <h1 className="app-title">To-Do List</h1>
      <ToDoForm />
      <ToDoList />
    </div>
  );
};
export default App;
