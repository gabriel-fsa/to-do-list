import { Test, TestingModule } from '@nestjs/testing'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'

describe('TaskController', () => {
  let controller: TaskController
  let spyService: TaskService

  beforeAll(async () => {
    const TaskServiceProvider = {
      provide: TaskService,
      useFactory: () => ({
        findAll: jest.fn(() => []),
      }),
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService, TaskServiceProvider],
    }).compile()

    controller = module.get<TaskController>(TaskController)
    spyService = module.get<TaskService>(TaskService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
    expect(spyService).toBeDefined()
  })
})
