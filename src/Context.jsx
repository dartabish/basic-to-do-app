import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const getLocalStorage = () => {
    let list = localStorage.getItem('toDoList');
    if (list) {
      list = JSON.parse(localStorage.getItem('toDoList'));
    } else {
      list = [];
    }
    return list;
  };

  const setLocalStorage = toDos => {
    localStorage.setItem('toDoList', JSON.stringify(toDos));
  };

  const [toDos, setToDos] = useState(getLocalStorage());

  const addToDo = toDo => {
    const newToDo = {
      toDoName: toDo,
      isCompleted: false,
      id: nanoid(),
    };

    const newToDos = [...toDos, newToDo];
    setToDos(newToDos);
    setLocalStorage(newToDos);
  };

  const removeToDo = toDoId => {
    const newToDos = toDos.filter(toDo => toDo.id !== toDoId);
    setToDos(newToDos);
    setLocalStorage(newToDos);
  };

  const toggleToDo = toDoId => {
    const newToDos = toDos.map(toDo => {
      if (toDo.id === toDoId) {
        const newToDo = { ...toDo, isCompleted: !toDo.isCompleted };
        return newToDo;
      }
      return toDo;
    });
    setToDos(newToDos);
    setLocalStorage(newToDos);
  };

  return (
    <AppContext.Provider
      value={{
        toDos,
        setToDos,
        addToDo,
        removeToDo,
        toggleToDo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
