export interface BasicToDo {
  id: number;
  title: string;
  desc: string;
}

export interface TodoTypes extends BasicToDo {
  dateStart: Date;
}
