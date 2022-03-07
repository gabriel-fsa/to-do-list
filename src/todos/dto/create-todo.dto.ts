import Todo from '../entities/todo.entity'

export class CreateTodoDto
  implements Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>
{
  name: string
}
