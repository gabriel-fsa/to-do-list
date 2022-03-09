import React from 'react';
import InputForm from '../../components/Form';
import TaskList from '../../components/TaskList';
import TodoList from '../../components/TodoList';
import { useTodo } from '../../hook/useTodo';
import { Container, Content, Header } from './styles';



const Todo: React.FC = () => {
  const { selectedTodo } = useTodo()
  return (
    <Container>
      <Header>
        {selectedTodo ?
          <div>
            <h1>Lista de Tarefas</h1>
          </div>
          : <h1>Lista de Todo </h1>}
        <InputForm isInTaskPage={!!selectedTodo} isInTodoPage={!selectedTodo} />

      </Header>
      <Content>
        {selectedTodo ? <TaskList /> : <TodoList />}
      </Content>
    </Container>
  );
};

export default Todo;
