import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cafeReducer from "../reducers/cafe-reducer";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { combineReducers, configureStore, Action } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";

let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);
const composedEnhancers = compose(middleware);

const rootReducer = combineReducers({ cafeReducer, composedEnhancers });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const store = configureStore({
  reducer: { rootReducer },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
