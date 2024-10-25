import { useGlobalContext } from './Context';
import SingleItem from './SingleItem';

const ToDoList = () => {
  const { toDos, removeToDo } = useGlobalContext();
  return (
    <div className="items">
      {toDos.map(toDo => {
        return <SingleItem key={toDo.id} toDo={toDo} />;
      })}
    </div>
  );
};

export default ToDoList;
