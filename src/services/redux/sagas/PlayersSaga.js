import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import _ from "lodash";

import { PlayerAtionTypes } from "../actiontypes/PlayerAtionTypes";
import { fetchAllPlayersFailue, fetchAllPlayersSuccess, savePlayerFailue, savePlayerSuccess } from "../actions/PlayerActions";
import Urls from "../../../constants/Urls";


const url = Urls.API_URL;

function* asyncFetchPlayers(action) {
  try {
    const page = action.payload;
    console.log(url, "=> URL");


    const response = yield call(() => axios.get(`${url}/players`));

    yield put(fetchAllPlayersSuccess((response.data.reverse())));
  } catch (error) {
    let errorResponse = _.get(
      error,
      "response.data",
      "Unable to serve, Please try after sometime!"
    );

    yield put(fetchAllPlayersFailue(errorResponse));
  }
}

function* asyncSavePlayer(action) {
    try {
      const response = yield call(() => axios.post(`${url}/players`,action.payload));
      yield put(savePlayerSuccess(response.data));
    } catch (error) {
      let errorResponse = _.get(
        error,
        "response.data",
        "Unable to serve, Please try after sometime!"
      );
  
      yield put(savePlayerFailue(errorResponse));
    }
  }

export function* watchPlayersSaga() {
  yield takeEvery(PlayerAtionTypes.FETCH_PLAYERS_DETAILS, asyncFetchPlayers);
  yield takeEvery(PlayerAtionTypes.SAVE_PLAYER_DETAIL, asyncSavePlayer);

}