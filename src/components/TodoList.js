import React from "react";

const TodoList = (todos, setTodos) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {TodoList.map((todo) => (
        <li className='todolist-item' key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className='list'
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button className='button-complet task-button'>
              <i class='fa-duotone fa-circle-check'></i>
            </button>
            <button className='button-edit task-button'>
              <i class='fa-solid fa-pen-to-square'></i>
            </button>
            <button
              className='button-delete task-button'
              onChange={handleDelete(todo)}
            >
              <i class='fa-solid fa-trash-can'></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
