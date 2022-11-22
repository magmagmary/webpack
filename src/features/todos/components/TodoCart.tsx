import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '@src/features/todos/todosApi';
import React, { FC, useCallback } from 'react';
import { ITodo } from '../todoInterfaces';

const TodoCart: FC<{ todo: ITodo }> = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const editHandler = useCallback(() => {
    updateTodo({ ...todo, todo: 'Noch Noch' } as ITodo);
  }, []);

  return (
    <div className='bg-white rounded-lg p-5 flex items-center gap-2'>
      <span> {todo.todo}</span>
      <button
        className='w-6 h-6 p-2 center rounded-full bg-red-700 text-white text-xs '
        title='Delete'
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
      <button
        className='w-6 h-6 p-2 center rounded-full bg-blue-700 text-white text-xs'
        title='Edit'
        onClick={editHandler}
      >
        E
      </button>
    </div>
  );
};

export default TodoCart;
