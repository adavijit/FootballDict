import { PlayerAtionTypes } from "../actiontypes/PlayerAtionTypes";

export const fetchAllPlayers = (data) => {
  return {
    type: PlayerAtionTypes.FETCH_PLAYERS_DETAILS,
    error: {},
    payload: data,
  };
};

export const fetchAllPlayersSuccess = (data) => {
  return {
    type: PlayerAtionTypes.FETCH_PLAYERS_DETAILS_SUCCESS,
    error: {},
    payload: data,
  };
};

export const fetchAllPlayersFailue = (error) => {
  return {
    type: PlayerAtionTypes.FETCH_PLAYERS_DETAILS_FAILURE,
    error: error,
    payload: {},
  };
};

export const savePlayer = (data) => {
    return {
      type: PlayerAtionTypes.SAVE_PLAYER_DETAIL,
      error: {},
      payload: data,
    };
  };
  
export const savePlayerSuccess = (data) => {
    return {
      type: PlayerAtionTypes.SAVE_PLAYER_DETAIL_SUCCESS,
      error: {},
      payload: data,
    };
};
  
export const savePlayerFailue = (error) => {
    return {
      type: PlayerAtionTypes.SAVE_PLAYER_DETAIL_FAILURE,
      error: error,
      payload: {},
    };
};