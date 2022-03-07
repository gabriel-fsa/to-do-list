import { Module } from '@nestjs/common'
import { TodosModule } from './todos/todos.module'
import { TaskModule } from './task/task.module'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [TodosModule, TodosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
