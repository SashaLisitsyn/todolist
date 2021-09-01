import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todoActions';

import './styles.css';

const ToDo = ({ todo, removeTodo }) => {
  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <div className="todo input-group mb-3" key={todo.id}>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={handleRemoveTodo}
      >
        Удалить
      </button>
      <p
        className="form-control"
        aria-label="Example text with two button addons"
      >
        {todo.task}
      </p>
    </div>
  );
};

const mapDispatchToProps = {
  removeTodo,
};

export default connect(null, mapDispatchToProps)(ToDo);
