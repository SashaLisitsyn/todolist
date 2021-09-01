import { connect } from 'react-redux';

import ToDo from '../ToDo';

const ToDoList = ({ syncTodos }) => {
  return (
    <div className="todolist">
      {syncTodos.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    syncTodos: state.todos.todos,
  };
};

export default connect(mapStateToProps, null)(ToDoList);
