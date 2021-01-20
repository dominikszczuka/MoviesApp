import { getTodosApi } from "api/todoApi";
import { AlertMessage } from "constants/enums/AlertMessage";

import { Category, Priority, TodoType } from "constants/types/TodoTypes";
import { call, fork, put, takeLatest, delay, select } from "redux-saga/effects";

import * as todosActions from "./todoActions";
import * as todosTypes from "./todoTypes";

const priority = ["low", "medium", "high"];
const category = ["lifestyle", "work", "house", "car", "children"];

function createContentTask(todos: TodoType[]) {
  for (const todo of todos) {
    todo.priority = priority[
      Math.floor(Math.random() * (priority.length - 1 - 0 + 1) + 0)
    ] as Priority;
    console.log(todo);
    todo.category = category[
      Math.floor(Math.random() * (category.length - 1 - 0 + 1) + 0)
    ] as Category;
    todo.description =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, pariatur Lorem, ipsum.";
  }
  return todos;
}

function* getTodoSagas(action: todosTypes.FetchTodos) {
  const { payload: callback } = action;
  try {
    yield put(todosActions.fetchTodosPending());
    const todos: TodoType[] = yield call(getTodosApi);
    createContentTask(todos);
    if (!todos[0].id) return yield put(todosActions.fetchTodosRejected("Brak"));
    yield put(todosActions.fetchTodosResolved(todos));
    callback(AlertMessage.fetch_data, "success");
  } catch (error) {
    yield put(todosActions.fetchTodosRejected(error));
    callback(error, "error");
  }
}

function* updateTodoTask(action: todosTypes.UpdateTodo) {
  const { payload } = action;
  try {
    yield put(todosActions.updateTodoPending());
    delay(2000);
    const todos: TodoType[] = yield select((state) => state.todosReducer.todos);

    const index = todos.findIndex((todo) => todo.id === payload.todo.id);

    todos[index] = payload.todo;
    console.log(todos);
    yield put(todosActions.fetchTodosResolved(todos));
  } catch (error) {
    yield put(todosActions.updateTodoRejected(error));
    payload.callback(error, "error");
  }
}

function* addTodoTask(action: todosTypes.AddTodo) {
  const { callback } = action.payload;
  try {
    yield put(todosActions.addTodoPending());
    delay(2000);
    const todos: TodoType[] = yield select((state) => state.todosReducer.todos);
    const newTodos = [...todos];
    newTodos.unshift(action.payload.todo);
    callback(AlertMessage.add_task, "success");
    yield put(todosActions.addTodoResolved(newTodos));
  } catch (error) {
    yield put(todosActions.addTodoRejected(error));
  }
}

function* deleteTodoTask(action: todosTypes.DeleteTodo) {
  const { callback } = action.payload;
  try {
    yield put(todosActions.deleteTodoPending());
    delay(2000);
    const doneTodos: TodoType[] = yield select(
      (state) => state.todosReducer.doneTodos
    );
    const todosCopy = [...doneTodos];
    let newTasks: TodoType[] = [];
    let tasksToDelete = action.payload.todosId;

    for (let i = 0; i < todosCopy.length; i++) {
      const task = todosCopy[i];
      const exists = tasksToDelete.includes(task.id);
      if (!exists) {
        newTasks.push(task);
      }
    }
    yield put(todosActions.deleteTodoResolved(newTasks));
    callback(AlertMessage.delete_tasks, "success");
  } catch (error) {
    yield put(todosActions.deleteTodoRejected(error));
  }
}

function* watchTodoRequest() {
  yield takeLatest(todosTypes.FETCH_TODOS, getTodoSagas);
  yield takeLatest(todosTypes.UPDATE_TODO, updateTodoTask);
  yield takeLatest(todosTypes.ADD_TODO, addTodoTask);
  yield takeLatest(todosTypes.DELETE_TODO, deleteTodoTask);
}

const todoSaga = [fork(watchTodoRequest)];

export default todoSaga;
