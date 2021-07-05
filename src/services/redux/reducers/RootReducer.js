import { combineReducers } from "redux";
import PlayersReducer from "../reducers/PlayersReducer";


const appReducer = combineReducers({
    PlayersReducer,
});
const RootReducer = (state, action) => {
  return appReducer(state, action);
};

export default RootReducer;