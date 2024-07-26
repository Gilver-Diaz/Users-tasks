import { Delete, Get, Injectable, Patch } from '@nestjs/common';
import { task, taskSatus } from './task.entity';
import { v4 } from 'uuid';
import { updateTaskDtop } from './dto/tasks.dto';
// los servicios son metodos reutilisables (aca es donde se hace la listas de tareas)
@Injectable()
export class TasksService {
  // De aca vienen la info y los parametros que me dara cuando yo hago las petiones,
  //tambien simula mi base de dato !
  private tasks = [
    {
      id: '1',
      title: 'frist tasks',
      description: 'some tasks',
      status: taskSatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTasks(title: string, description: string) {
    const task = {
      // v4 (es un ID unico).
      id: v4(),
      title,
      description,
      status: taskSatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }
  //aca estoy mandando a hacer la busqueda por ID, mando hacer el recorrido de buscqueda de id y que me devuelva un arreglo de tareas
  // no retorno por que solo quiero que actulice
  deleteTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getTaskById(id: string): task {
    return this.tasks.find((task) => task.id !== id);
  }

  //updateFilds es la manera de agruparlo, seria como campo para actulizar!
  updateTasks(id: string, updateFilds: updateTaskDtop): task {
    //updatetaskTop, son los parametros que les pase en el dto , y sera igual que una task
    const task = this.getTaskById(id);
    //Object.assign. es una propiedad de javascript.
    const newTasks = Object.assign(task, updateFilds);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTasks : task));
    return newTasks;
    // si la tarea coninside  va  a colocar el nuevo dato , si no lo deja como esta!
  }
}
