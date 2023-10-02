import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {

  // const [todoId, setTodoId] = useState(1);
  const { data: todos = [], isLoading } = useGetTodosQuery();
  // const { data: todo, isLoading } = useGetTodoQuery(todoId);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      {/* <pre>{JSON.stringify(todo)}</pre> */}

      {/* <button
        onClick={() => setTodoId(todoId + 1)}
      >
        Next Todo
      </button> */}

      <ul>
        {
          todos?.map(todo => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'COMPLETADO' : 'PENDIENTE'} </strong>
              {todo.title}
            </li>
          ))
        }
      </ul>
    </>
  )
}