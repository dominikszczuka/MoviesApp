import { TodoTypes } from "constants/types/TodoTypes";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getTodosApi = async (): Promise<TodoTypes[] | undefined> => {
  const apiUrl = `${BASE_URL}/todos?_limit=20`;
  try {
    const response = await fetch(apiUrl);
    const jsonResponse: TodoTypes[] = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};
