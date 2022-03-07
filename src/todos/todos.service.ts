import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Injectable()
export class TodosService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createTodoDto: CreateTodoDto) {
    return this.prismaService.todo.create({
      include: { tasks: true },
      data: createTodoDto,
    })
  }

  findAll() {
    return this.prismaService.todo.findMany({
      include: { tasks: true },
    })
  }

  findOne(id: number) {
    return this.prismaService.todo.findUnique({
      include: {
        tasks: true,
      },
      where: { id },
    })
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prismaService.todo.update({
      include: { tasks: true },
      where: { id },
      data: updateTodoDto,
    })
  }

  remove(id: number) {
    return this.prismaService.todo.delete({ where: { id } })
  }
}
