import { all, fork } from "redux-saga/effects";
import { watchPlayersSaga } from "./PlayersSaga";

export default function* rootSaga() {
  yield all([
    watchPlayersSaga(),
  ]);
}