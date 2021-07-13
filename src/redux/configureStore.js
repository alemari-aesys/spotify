import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";

// import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import AppBarReducer from "./reducers/AppBarReducer";
import watcherSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(AppBarReducer, applyMiddleware(sagaMiddleware))
const store = configureStore({
    reducer: AppBarReducer,
    middleware: [...getDefaultMiddleware({ thunk: false}), sagaMiddleware]
})

sagaMiddleware.run(watcherSaga)
export default store;