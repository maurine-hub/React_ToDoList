/* eslint-disable react/prop-types */

import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, deleteTodo, modified }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          modified={modified}
        />
      ))}
    </div>
  );
}

export default TodoList;