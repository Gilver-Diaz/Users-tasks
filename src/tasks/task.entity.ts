// esto me dira en que esta estan las Tareas / tasks

export enum taskSatus {
  PENDING = 'PENDING',
  TN_PROGRESS = 'TN_PROGRESS',
  DONE = 'DONE',
}

// aca declaro que tipo de datos son ! para usarlo se debe exportar
export class task {
  id: string;
  title: string;
  description: string;
  status: taskSatus;
}
