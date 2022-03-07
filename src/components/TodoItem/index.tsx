import React, { ReactNode } from 'react';
import { Todo, useTodo } from '../../hook/useTodo';

import { Container, Content } from './styles';
import { RiCloseCircleLine } from 'react-icons/ri';

interface TodoItemProps {
  todo: Todo
}

function TodoItem({ todo }: TodoItemProps) {
  const { todos, handleDeleteTodo, setSelectedTodo } = useTodo()

  function onDeleteButton(idTodo: number) {
    return () => handleDeleteTodo(idTodo)
  }
  function onClickTask(todoId: number) {
    return () => setSelectedTodo(todoId)
  }
  return (
    <Container>
      <a href={'#'} onClick={onClickTask(todo.id)} >{todo.name}</a>
      <RiCloseCircleLine onClick={onDeleteButton(todo.id)}>Delete Todo</RiCloseCircleLine>
    </Container >
  );
};

export default TodoItem;
