import { PlayerAtionTypes } from "../actiontypes/PlayerAtionTypes";

const initialState = {
  fetching_players_details: false,
  players_details: [],
  fetch_error: {},


  saving_player_details: false,
  save_check: false,
  save_error: {},
};

const PlayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlayerAtionTypes.FETCH_PLAYERS_DETAILS:
      return {
        ...state,
        fetching_players_details: true,
      };
    case PlayerAtionTypes.FETCH_PLAYERS_DETAILS_SUCCESS:
      return {
        ...state,
        fetching_players_details: false,
        fetch_error: {},
        players_details: action.payload,
      };
    case PlayerAtionTypes.FETCH_PLAYERS_DETAILS_FAILURE:
      return {
        ...state,
        fetch_error: action.error,
        fetching_players_details: false,
        players_details: [],
      };

      case PlayerAtionTypes.SAVE_PLAYER_DETAIL:
      return {
        ...state,
        saving_player_details: true,
        save_check: false,
      };
    case PlayerAtionTypes.SAVE_PLAYER_DETAIL_SUCCESS:
      return {
        ...state,
        saving_player_details: false,
        save_error: {},
        save_check: true,
      };
    case PlayerAtionTypes.SAVE_PLAYER_DETAIL_FAILURE:
      return {
        ...state,
        save_error: action.error,
        saving_player_details: false,
        save_check: false,
      };
    default:
      return state;
  }
};

export default PlayersReducer;