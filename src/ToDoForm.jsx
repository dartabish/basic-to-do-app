import { useState } from 'react';
import { useGlobalContext } from './Context';

const ToDoForm = () => {
  const { addToDo } = useGlobalContext();
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      addToDo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Add To-Do</button>
    </form>
  );
};
export default ToDoForm;
