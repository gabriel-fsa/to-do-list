import { Test, TestingModule } from '@nestjs/testing'
import { TodosService } from './todos.service'

class TodoServiceMock {}

describe('TaskService', () => {
  let service: TodosService

  beforeAll(async () => {
    const TaskServiceProvider = {
      provide: TodosService,
      useClass: TodoServiceMock ,
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService, TaskServiceProvider],
    }).compile()

    service = module.get<TodosService>(TodosService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
