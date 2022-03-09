import { Test, TestingModule } from '@nestjs/testing'
import { TodosController } from './todos.controller'
import { TodosService } from './todos.service'

describe('TodosController', () => {
  let controller: TodosController
  let spyService: TodosService

  beforeAll(async () => {
    const TodoServiceProvider = {
      provide: TodosService,
      useFactory: () => ({
        findAll: jest.fn(() => []),
      }),
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService, TodoServiceProvider],
    }).compile()

    controller = module.get<TodosController>(TodosController)
    spyService = module.get<TodosService>(TodosService)
    spyService = module.get<TodosService>(TodosService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
    expect(spyService).toBeDefined()
  })
})
