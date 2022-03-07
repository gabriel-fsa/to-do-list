import React, { useState, useEffect } from 'react';
import { useTodo } from '../../hook/useTodo';
import Button from '../button';

import { Container, Form } from './styles';

interface FormProps {
  isInTodoPage?: boolean
  isInTaskPage?: boolean
}

const InputForm: React.FC<FormProps> = ({ isInTodoPage, isInTaskPage }) => {
  const {
    taskEditing,
    setTaskEditing,
    handleUpdateTask,
    selectedTodo,
    setSelectedTodo,
    handleAddTodo,
    handleAddTask
  } = useTodo()
  const [inputData, setInputData] = useState('')

  useEffect(() => {
    if (taskEditing) {
      setInputData(taskEditing.taskMessage)
    } else {
      setInputData('')
    }
  }, [taskEditing])

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputData(e.target.value)
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement> | any) {
    e.preventDefault()
    if (!inputData.length) return
    if (isInTaskPage) {
      if (taskEditing) {
        const { todoId, taskId, taskMessage } = taskEditing
        handleUpdateTask(todoId, taskId, inputData)
        setTaskEditing(null)
      }
      else if (selectedTodo) handleAddTask(selectedTodo, inputData)
    }
    if (isInTodoPage) {
      handleAddTodo(inputData)
    }
    setInputData('')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={onChange}
          value={inputData}
        />
        <Button onClick={handleSubmit}>{taskEditing && 'Editar '} {isInTodoPage && 'Todo'} {!taskEditing && isInTaskPage && 'tarefa'}</Button>
        {isInTaskPage && taskEditing && <Button type='button' onClick={() => setTaskEditing(null)}>{'Cancelar'}</Button>}
        {isInTaskPage && !taskEditing && <Button type='button' onClick={() => setSelectedTodo(null)}>{'Voltar'}</Button>}
      </Form >
    </Container>
  );
};

export default InputForm;
