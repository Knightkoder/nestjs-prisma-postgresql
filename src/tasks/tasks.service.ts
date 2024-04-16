import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

@Injectable()
export class TasksService {
  private tasks = [];
  getTasks() {
    return this.tasks;
  }
  getTask(id: number | undefined) {
    console.log('id', id);
    const resultTask = this.tasks.find((t) => t.id === id);
    if (!resultTask) {
      return new NotFoundException(`Task ${id} not found`); // throw new NotFoundException('Task not found');
    }
    return resultTask;
  }
  createTask(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return task;
  }
  deleteTask(id: string) {
    return id;
  }
  updateTask(_id: string, task: UpdateTaskDto) {
    return { _id, task };
  }
  updateTaskStatus(_id: string, status: string) {
    return { _id, status };
  }
}
