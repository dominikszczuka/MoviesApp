import { IconTypes } from "components/Icon/Icon";

export interface BasicToDo {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
  category: "lifestyle" | "work" | "house" | "car" | "children" | "science";
  categoryIcon: IconTypes;
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
