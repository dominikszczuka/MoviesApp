import { TodoType } from "constants/types/index";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getTodosApi = async (): Promise<TodoType[] | undefined> => {
  const apiUrl = `${BASE_URL}/todos?_limit=20`;
  try {
    const response = await fetch(apiUrl);
    const jsonResponse: TodoType[] = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};
