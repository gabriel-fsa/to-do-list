/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode, useState } from 'react';
import { Task, Todo, useTodo } from '../../hook/useTodo';

import { Container, ButtonsWrapper, Checkbox } from './styles';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

interface TodoItemProps {
  todoItem?: Todo
  taskItem?: Task
  onEditButton(): void
  onDeleteButton(): void
  onCheckboxClicked?: (() => void)
}

function ListItem({ todoItem, taskItem, onEditButton, onDeleteButton, onCheckboxClicked }: TodoItemProps) {
  const { selectedTodo, setSelectedTodo } = useTodo()
  const [checkboxValue, setCheckboxVelue] = useState<boolean>(taskItem?.completed || false)

  function handleClickTodo(todoId: number) {
    return () => setSelectedTodo(todoId)
  }

  function handleCheckbox() {
    setCheckboxVelue(!checkboxValue)
    if (onCheckboxClicked) onCheckboxClicked()
  }

  return (
    <Container className='task'>
      {selectedTodo
        && onCheckboxClicked
        && <Checkbox defaultChecked={taskItem?.completed} onChange={handleCheckbox} />}
      <label>
        {!selectedTodo
          ? <a href={'#'} onClick={handleClickTodo(todoItem?.id ?? -1)} >{todoItem?.name || taskItem?.name}</a>
          : todoItem?.name || taskItem?.name}
      </label>
      <ButtonsWrapper>
        <TiEdit fill='#8D63D7' onClick={onEditButton} >Editar</TiEdit>
        <RiCloseCircleLine fill='#8D63D7' onClick={onDeleteButton}>Delete Todo</RiCloseCircleLine>
      </ButtonsWrapper>
    </Container >
  );
};

export default ListItem;
