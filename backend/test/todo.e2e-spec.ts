import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { TodosModule } from '../src/todos/todos.module'
import { TodosService } from '../src/todos/todos.service'

describe('AppController (e2e)', () => {
  let app: INestApplication
  const dbInMemory = []
  const todoService = {
    create: (data) => {
      dbInMemory.push(data)
      return dbInMemory
    },
    findAll: () => dbInMemory,
    findOne: (id) => dbInMemory.filter((item) => item.id === id),
    update: () => dbInMemory,
    remove: () => dbInMemory,
  }
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TodosModule],
    })
      .overrideProvider(TodosService)
      .useValue(todoService)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/todos (GET)', () => {
    return request(app.getHttpServer()).get('/todos').expect(200).expect('[]')
  })

  it('/todos (POST)', () => {
    return request(app.getHttpServer())
      .post('/todos')
      .send({ name: 'first todo' })
      .expect(201)
      .expect('[{"name":"first todo"}]')
  })
  
  it('/todos (GET)', () => {
    return request(app.getHttpServer()).get('/todos').expect(200).expect('[]')
  })
})
