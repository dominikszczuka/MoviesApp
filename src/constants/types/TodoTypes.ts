import { IconTypes } from "components/Icon/Icon";

export interface BasicTodo {
  id: number;
  title: string;
  priority?: Priority;
  category?: Category;
}

export interface TodoType extends BasicTodo {
  id: number;
  userId: number;
  completed: boolean;
}

export interface FetchTodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Priority {
  priorityTitle: "High" | "Medium" | "Low";
}

export interface Category {
  categoryTitle:
    | "lifestyle"
    | "work"
    | "house"
    | "car"
    | "children"
    | "science";
  categoryIcon: IconTypes;
}
