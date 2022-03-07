import React, { useState } from 'react';
import { Task, useTodo } from '../../hook/useTodo';
import Button from '../button';
import { Checkbox, Container, WrapperButton } from './styles';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

interface TaskItemProps {
  task: Task
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { setTaskEditing, selectedTodo, handleDeleteTask, toggleCompleteTask } = useTodo()
  const [checkbox, setCheckBox] = useState(task.completed)


  function handleEditButton(todoId: number, taskId: number) {
    return () => setTaskEditing({
      todoId: Number(selectedTodo),
      taskId: task.id,
      taskMessage: task.name
    }
    )
  }
  function handleDeleteButton(todoId: number, taskId: number) {
    return () => handleDeleteTask(todoId, taskId)

  }
  function onCheckbox() {
    console.log(`Valor da task ${task.name}`);

    toggleCompleteTask(Number(selectedTodo), task.id).then((value) => setCheckBox(value))
  }
  return (
    <Container>
      <Checkbox type='checkbox' defaultChecked={task.completed} onChange={onCheckbox} />

      <span>{task.name}</span>-
      <WrapperButton>
        <TiEdit onClick={handleEditButton(Number(selectedTodo), task.id)} >Editar</TiEdit>
        <RiCloseCircleLine onClick={handleDeleteButton(Number(selectedTodo), task.id)}>Deletar</RiCloseCircleLine>
      </WrapperButton>
    </Container>
  );
};

export default TaskItem;
