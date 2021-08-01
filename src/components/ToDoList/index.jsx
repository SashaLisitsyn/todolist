import ToDo from '../ToDo';

const ToDoList = ({ todos, removeTodo }) => {
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default ToDoList;
