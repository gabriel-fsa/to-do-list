import React, { useState, useEffect } from 'react';
import { useTodo } from '../../hook/useTodo';
import { ReactComponent as Add } from '../../assets/Add.svg'
import { ReactComponent as Back } from '../../assets/Back.svg'
import { ReactComponent as Cancel } from '../../assets/Cancel.svg'

import { Container, InputWrapper, Form } from './styles';

interface FormProps {
  isInTodoPage?: boolean
  isInTaskPage?: boolean
}

const InputForm: React.FC<FormProps> = ({ isInTodoPage, isInTaskPage }) => {
  const {
    edit,
    setEdit,
    handleUpdateTask,
    handleAddTask,
    handleUpdateTodo,
    selectedTodo,
    setSelectedTodo,
    handleAddTodo,
  } = useTodo()
  const [inputData, setInputData] = useState('')

  useEffect(() => {
    if (edit) {
      setInputData(edit.message)
    } else {
      setInputData('')
    }
  }, [edit])

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputData(e.target.value)
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement> | any) {
    e.preventDefault()
    if (!inputData.length) return
    if (edit) {
      if (edit.mode === 'task') {
        const { todoId, taskId, message } = edit
        handleUpdateTask(todoId, Number(taskId), inputData)
      }
      if (edit.mode === 'todo') {
        const { todoId, taskId, message } = edit
        handleUpdateTodo(todoId, inputData)
      }
      setEdit(null)
    }
    else if (selectedTodo) handleAddTask(selectedTodo, inputData)
    else if (isInTodoPage) {
      handleAddTodo(inputData)
    }
    setInputData('')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {isInTaskPage && !edit && <button className='back-icon' type='button' onClick={() => setSelectedTodo(null)}>{<Back />}</button>}
        <InputWrapper>
          <input
            type='text'
            onChange={onChange}
            value={inputData}
            placeholder={selectedTodo ?
              'Insira o nome da tarefa'
              : 'Insira o nome da todo'}
          />
        </InputWrapper>
        <button onClick={handleSubmit}><Add /></button>
        {isInTaskPage && edit && <button type='button' onClick={() => setEdit(null)}><Cancel /></button>}
      </Form >
    </Container>
  );
};

export default InputForm;
