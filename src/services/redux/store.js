  
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/sagas";
import RootReducer from "../redux/reducers/RootReducer";

const logger = createLogger({
  predicate: (getState, action) => action.type !== "CHANGE_FORM",
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;