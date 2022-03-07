import React from 'react';
import { useTodo } from '../../hook/useTodo';
import InputForm from '../Form';

import TaskItem from '../TaskItem';
import TodoItem from '../TodoItem';
import { Container } from './styles';


interface TasksProps {
  tasks: {
    id: number
    task: string
    completed: boolean
  }[]
}

interface TaskProps {
}

const TodoList: React.FC<TaskProps> = () => {
  const { todos } = useTodo()

  return (
    <Container>
      <InputForm isInTodoPage />
      {todos.length ? todos.map(todo =>
        <TodoItem key={todo.id} todo={todo} />
      ) : null
      }
    </Container>
  )
}

export default TodoList;
