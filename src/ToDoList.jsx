import { useGlobalContext } from './Context';

const ToDoList = () => {
  const { toDos, toggleCompleted } = useGlobalContext();
  return (
    <div>
      {toDos.map((toDo, index) => {
        const { text, isCompleted } = toDo;
        return (
          <li
            key={index}
            style={{
              cursor: 'pointer',
              textDecoration: isCompleted ? 'line-through' : 'none',
            }}
            onClick={() => toggleCompleted(index)}
          >
            {text}
          </li>
        );
      })}
    </div>
  );
};
export default ToDoList;
