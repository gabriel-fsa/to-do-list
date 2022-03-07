import { Test, TestingModule } from '@nestjs/testing'
import { TaskService } from './task.service'

class TaskServiceMock {}

describe('TaskService', () => {
  let service: TaskService

  beforeAll(async () => {
    const TaskServiceProvider = {
      provide: TaskService,
      useClass: TaskServiceMock,
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService, TaskServiceProvider],
    }).compile()

    service = module.get<TaskService>(TaskService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
