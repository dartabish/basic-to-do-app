import './App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">To-Do List</h1>
      <ToDoForm />
      <ToDoList />
    </div>
  );
};
export default App;
