import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDto, updateTaskDtop } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private TasksService: TasksService) {}

  // aca defino que tipo de llamado http le hago el cliente ,sea get o post, delete
  @Get()
  gettAllTasks() {
    return this.TasksService.getAllTasks();
  }

  //usando el metodo @Body, le hago el llamdo en el potman en el JSON!
  @Post()
  createTasks(@Body() newTasks: CreateTasksDto) {
    return this.TasksService.createTasks(newTasks.title, newTasks.description);
  }

  @Delete(':id') //tasks/1
  deleteTasks(@Param('id') id: string) {
    this.TasksService.deleteTasks(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFields: updateTaskDtop) {
    return this.TasksService.updateTasks(id, updateFields);
  }
}
