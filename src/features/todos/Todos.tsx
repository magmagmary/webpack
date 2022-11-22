import Loading from '@src/components/shared/Loading';
import React from 'react';
import { useGetTodosQuery } from './todosApi';
import TodoCart from './components/TodoCart';
import { ITodo } from './todoInterfaces';

const Todos = () => {
  const { data: todos, isLoading } = useGetTodosQuery();

  if (isLoading) return <Loading />;

  return (
    <div className='flex gap-5 items-center  flex-wrap'>
      {todos &&
        todos.map((todo: ITodo) => <TodoCart todo={todo} key={todo.id} />)}
    </div>
  );
};

export default Todos;
