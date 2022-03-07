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
  Logger,
  HttpException,
} from '@nestjs/common'
import { TodosService } from './todos.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Prisma } from '@prisma/client'

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    try {
      const createTodo = await this.todosService.create(createTodoDto)
      return createTodo
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: 'Todo já cadastrada',
            },
            HttpStatus.BAD_REQUEST,
          )
        }
      }
    }
  }

  @Get()
  findAll() {
    return this.todosService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(+id, updateTodoDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id)
  }
}
