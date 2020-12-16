import { all } from "redux-saga/effects";
import todoSaga from "store/todo/todoSagas";

export default function* rootSagas() {
  yield all([...todoSaga]);
}
