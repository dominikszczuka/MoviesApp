export interface BasicToDo {
  id: number;
  title: string;
}

export interface TodoType extends BasicToDo {
  userId: number;
  completed: boolean;
}

export interface FetchTodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
