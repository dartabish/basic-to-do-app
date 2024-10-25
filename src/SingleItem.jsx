import { useState } from 'react';
import { useGlobalContext } from './Context';

const SingleItem = ({ toDo }) => {
  const { removeToDo, toggleToDo } = useGlobalContext();
  const { toDoName, isCompleted } = toDo;
  return (
    <div
      className="single-item"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          style={{ marginRight: '10px' }}
          checked={isCompleted}
          onChange={() => toggleToDo(toDo.id)}
        />
        <p style={{ textDecoration: isCompleted && 'line-through' }}>
          {toDoName}
        </p>
      </div>
      <button className="delete-btn" onClick={() => removeToDo(toDo.id)}>
        Delete
      </button>
    </div>
  );
};
export default SingleItem;
