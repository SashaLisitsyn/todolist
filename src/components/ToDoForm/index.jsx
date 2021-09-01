import './styles.css';

import { useState } from 'react';

import { connect } from 'react-redux';
import { createTodo } from '../../actions/todoActions';

const ToDoForm = ({ createTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitForm(value);
    setValue('');
  };

  const handleSubmitForm = (value) => {
    if (value) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: value,
        complete: false,
      };
      createTodo(newTodo);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="todoform input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Название задачи"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <button
        className="btn btn-outline-secondary"
        type="submit"
        id="button-addon2"
      >
        Добавить
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  createTodo,
};

export default connect(null, mapDispatchToProps)(ToDoForm);
