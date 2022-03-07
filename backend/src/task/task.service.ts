import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createTaskDto: CreateTaskDto) {
    return this.prismaService.task.create({
      include: { todo: true },
      data: createTaskDto,
    })
  }

  findAll() {
    return this.prismaService.task.findMany({
      include: { todo: true },
    })
  }

  findOne(todoId: number, id: number) {
    return this.prismaService.task.findMany({
      where: { id, todoId },
    })
  }

  update(todoId: number, id: number, updateTaskDto: UpdateTaskDto) {
    return this.prismaService.task.updateMany({
      where: { id, todoId },
      data: updateTaskDto,
    })
  }

  remove(todoId: number, taskId: number) {
    return this.prismaService.task.deleteMany({
      where: {
        todoId,
        id: taskId,
      },
    })
  }
}
