import React from 'react';
import { useTodo } from '../../hook/useTodo';
import InputForm from '../Form';

import ListItem from '../ListItem';
import { Container } from './styles';


interface ListProps {
}

const List: React.FC<ListProps> = () => {
  const { todos, setEdit, handleDeleteTodo, handleUpdateTodo } = useTodo()

  function onDeleteButton(idTodo: number) {
    return () => handleDeleteTodo(idTodo)
  }
  function onEditButton(todoId: number, mode: 'task' | 'todo' = 'todo') {
    return () => setEdit({
      mode,
      todoId,
      message: todos
        ?.find((todo) => todo.id === todoId)?.name || ''
    })
  }

  return (
    <Container>
      {todos.length ? todos.map(todo =>
        <ListItem
          key={todo.id}
          todoItem={todo}
          onDeleteButton={onDeleteButton(todo.id)}
          onEditButton={onEditButton(todo.id)} />
      ) : null
      }
    </Container>
  )
}

export default List;
