import React from 'react';
import { useTodo } from '../../hook/useTodo';
import InputForm from '../Form';
import TaskItem from '../TaskItem';

import { Container } from './styles';

interface TaskListProps {
}

function TaskList({ }: TaskListProps) {
  const { todos, selectedTodo } = useTodo()

  const tasks = todos.find((todo) => todo.id === Number(selectedTodo))?.tasks

  return (
    <Container>
      <InputForm isInTaskPage />
      {tasks?.map((task) => <TaskItem key={task.id} task={task} />)}
    </Container>
  );
};



export default TaskList