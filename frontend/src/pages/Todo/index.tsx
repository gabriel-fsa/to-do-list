import React from 'react';
import InputForm from '../../components/Form';
import TaskList from '../../components/TaskList';
import TodoList from '../../components/TodoList';
import { useTodo } from '../../hook/useTodo';
import { Container, Content } from './styles';

interface TasksProps {
  id: number
  task: string
  completed: boolean
}

const Todo: React.FC = () => {
  const { todos, selectedTodo } = useTodo()
  return (
    <Container>
      <Content>
        {selectedTodo ?
          <div>
            <h1>Cadrastre uma task</h1>
            <h2>Todo: {todos.find((todo) => todo.id === selectedTodo)?.name}</h2>
          </div>
          : <h1>Cadrastre uma todo</h1>}
        {selectedTodo ? <TaskList /> : <TodoList />}
      </Content>
    </Container>
  );
};

export default Todo;
