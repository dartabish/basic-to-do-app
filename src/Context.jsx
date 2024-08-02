import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toDos, setToDos] = useState([]);

  const addToDo = toDo => {
    setToDos([...toDos, { text: toDo, isCompleted: false }]);
  };

  const toggleCompleted = index => {
    const newToDos = [...toDos];
    newToDos[index].isCompleted = !newToDos[index].isCompleted;
    setToDos(newToDos);
  };

  return (
    <AppContext.Provider value={{ toDos, setToDos, addToDo, toggleCompleted }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
