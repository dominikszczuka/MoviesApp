export interface BasicToDo {
  id: number;
  title: string;
  desc: string;
}

export interface ToDo extends BasicToDo {
  dateStart: Date;
}
