import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { TaskModule } from '../src/task/task.module'
import { TaskService } from '../src/task/task.service'

describe('AppController (e2e)', () => {
  let app: INestApplication
  const dbInMemory = []
  const taskService = {
    create: (data) => dbInMemory.push(data),
    findAll: () => dbInMemory,
    findOne: (id) => dbInMemory.filter((item) => item.id === id),
    update: () => dbInMemory,
    remove: () => dbInMemory,
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TaskModule],
    })
      .overrideProvider(TaskService)
      .useValue(taskService)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/task (GET)', () => {
    return request(app.getHttpServer()).get('/task').expect(200).expect('[]')
  })
  
    it('/task (POST)', () => {
      return request(app.getHttpServer())
        .post('/task')
        .send({ name: 'first task' })
        .expect(201)
        .expect('[]')
    })
})
