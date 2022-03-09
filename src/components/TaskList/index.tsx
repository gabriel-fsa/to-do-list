import React from 'react';
import { useTodo } from '../../hook/useTodo';
import InputForm from '../Form';
import TableItem from '../ListItem';

import { Container } from './styles';

interface TaskListProps {
}

function TaskList({ }: TaskListProps) {
  const {
    todos,
    selectedTodo,
    setEdit,
    handleDeleteTask,
    toggleCompleteTask,
  } = useTodo()

  const tasks = todos.find((todo) => todo.id === Number(selectedTodo))?.tasks

  function handleEditButton(todoId: number, taskId: number, mode: 'task' | 'todo' = 'task') {
    return () => setEdit({
      mode,
      todoId: Number(selectedTodo),
      taskId: taskId,
      message: todos
        ?.find((todo) => todo.id === Number(selectedTodo))?.tasks
        ?.find((task) => task.id === taskId)?.name || ''
    }
    )
  }
  function handleDeleteButton(todoId: number, taskId: number) {
    return () => handleDeleteTask(todoId, taskId)

  }
  function handleCheckbox(taskId: number) {
    return () => toggleCompleteTask(Number(selectedTodo), taskId)
  }

  return (
    <Container>
      {tasks?.map((task) => <TableItem
        key={task.id}

        taskItem={task}
        onDeleteButton={handleDeleteButton(Number(selectedTodo), task.id)}
        onEditButton={handleEditButton(Number(selectedTodo), task.id)}
        onCheckboxClicked={handleCheckbox(task.id)} />)}
    </Container>
  );
};



export default TaskList