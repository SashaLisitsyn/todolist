import { useState } from 'react';

import './styles.css';

const ToDoForm = ({ submitForm }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(value);
    setValue('');
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

export default ToDoForm;
