import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common'
import { TaskService } from './task.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { Prisma } from '@prisma/client'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    try {
      const createTask = await this.taskService.create(createTaskDto)
      return createTask
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: 'Task já cadastrada',
            },
            HttpStatus.BAD_REQUEST,
          )
        }
      }
    }
  }

  @Get()
  findAll() {
    return this.taskService.findAll()
  }

  @Get('/:todoId/:taskId')
  findOne(@Param('todoId') todoId: string, @Param('taskId') taskId) {
    return this.taskService.findOne(+todoId, +taskId)
  }

  @Patch('/:todoId/:taskId')
  async update(
    @Param('todoId') todoId: string,
    @Param('taskId') taskId,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    await this.taskService.update(+todoId, +taskId, updateTaskDto)
    return this.taskService.findOne(+todoId, +taskId)
  }

  @Delete('/:todoId/:taskId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('todoId') todoId: string, @Param('taskId') taskId: string) {
    return this.taskService.remove(+todoId, +taskId)
  }
}
