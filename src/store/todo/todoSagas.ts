import { getTodosApi } from "api/todoApi";
import { AlertMessage } from "constants/enums/AlertMessage";

import { TodoType } from "constants/types/TodoTypes";
import { call, fork, put, takeLatest, delay } from "redux-saga/effects";

import * as todosActions from "./todoActions";
import * as todosTypes from "./todoTypes";

function* getTodoSagas(action: todosTypes.FetchTodos) {
  const { payload: callback } = action;
  try {
    yield put(todosActions.fetchTodosPending());
    const todos: TodoType[] = yield call(getTodosApi);
    if (!todos[0].id) return yield put(todosActions.fetchTodosRejected("Brak"));
    yield put(todosActions.fetchTodosResolved(todos));
    callback(AlertMessage.fetch_data, "SUCCESS");
  } catch (error) {
    yield put(todosActions.fetchTodosRejected(error));
    callback(error, "ERROR");
  }
}

function* watchTodoRequest() {
  yield takeLatest(todosTypes.FETCH_TODOS, getTodoSagas);
}

const todoSaga = [fork(watchTodoRequest)];

export default todoSaga;
