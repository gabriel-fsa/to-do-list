import React from 'react';

import { TaskProvider } from './hook/useTodo';
import Todo from './pages/Todo';
import GlobalStyle from './styles/global'
//@ts-ignore
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
//@ts-ignore
import AlertTemplate from 'react-alert-template-basic'

function App() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }


  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <TaskProvider>
        <Todo />
        <GlobalStyle />
      </TaskProvider>
    </AlertProvider>
  )
}

export default App
