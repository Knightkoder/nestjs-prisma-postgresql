import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('Tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({
    status: 200,
    description: 'Return all tasks.',
    type: [String],
  })
  @ApiResponse({
    status: 404,
    description: 'Tasks not found.',
  })
  getAllTasks(@Query('limit') limit?: number): string[] {
    //console.log(limit)
    return this.tasksService.getTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.getTask(+id);
  }
  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }
  @Delete()
  deleteTask(@Param('id') id: string): string {
    return this.tasksService.deleteTask(id);
  }
  @Put()
  updateTask(@Param('id') _id: string, @Body('body') body: UpdateTaskDto) {
    return this.tasksService.updateTask(_id, body);
  }

  @Patch()
  updateTaskStatus(@Param('id') _id: string, @Body('status') status: string) {
    return this.tasksService.updateTaskStatus(_id, status);
  }
}
