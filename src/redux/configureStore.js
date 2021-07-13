import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import AppBarReducer from "./reducers/AppBarReducer";
import watcherSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(AppBarReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcherSaga)
export default store;