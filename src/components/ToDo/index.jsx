import './styles.css';

const ToDo = ({ todo, removeTodo }) => {
  const deleteTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <div className="todo input-group mb-3" key={todo.id}>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={deleteTodo}
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

export default ToDo;
