import { Module } from '@nestjs/common'
import { TodosService } from './todos.service'
import { TodosController } from './todos.controller'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [TodosController],
  providers: [PrismaService, TodosService],
})
export class TodosModule {}
