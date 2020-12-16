import { getTodosApi } from "api/todoApi";
import { TodoTypes } from "constants/types/TodoTypes";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import * as todosActions from "./todoActions";
import * as todosTypes from "./todoTypes";

function* getTodoSagas() {
  try {
    yield put(todosActions.fetchTodosPending());
    const todos: TodoTypes[] = yield call(getTodosApi);
    if (!todos[0].id) return yield put(todosActions.fetchTodosRejected("Brak"));
    yield put(todosActions.fetchTodosResolved(todos));
  } catch (error) {
    yield put(todosActions.fetchTodosRejected(error));
  }
}

function* watchTodoRequest() {
  yield takeLatest(todosTypes.FETCH_TODOS, getTodoSagas);
}

const todoSaga = [fork(watchTodoRequest)];

export default todoSaga;
