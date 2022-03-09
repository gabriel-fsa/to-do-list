import Task from '../entities/task.entity'

export class CreateTaskDto
  implements Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
{
  name: string
  completed?: boolean
  todoId: number
}
