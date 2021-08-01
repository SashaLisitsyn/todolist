import { useState } from 'react';

import Header from '../Header';
import ToDoForm from '../ToDoForm';
import ToDoList from '../ToDoList';
import Footer from '../Footer';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmitForm = (value) => {
    if (value) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: value,
        complete: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <>
      <Header />
      <ToDoForm submitForm={handleSubmitForm} />
      <ToDoList todos={todos} removeTodo={removeTodo} />
      <Footer />
    </>
  );
};

export default App;
