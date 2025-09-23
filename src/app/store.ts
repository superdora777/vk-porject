import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import app from "./reducer";
import desks from "../features/desks/reducer";
import columns from "../features/columns/reducer";
import cards from "../features/cards/reducer";
import card from "../features/card/reducer";
import { SET_OPENED_POPOUT, SET_POPOUT } from "./types";

// const store = configureStore({
//   reducer,
// });

const reducer = combineReducers({
  app,
  desks,
  columns,
  cards,
  card,
});

export const getStore = () => {
  const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    const result = next(action); // отправляем дальше
    // console.log("next state", store.getState());
    return result;
  };

  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // вырубаем проверки на те места, куда ты суёшь React-элемент
          ignoredActions: [SET_POPOUT, SET_OPENED_POPOUT],
          ignoredActionPaths: ["payload.popout", "payload.openedPopoutName"],
          ignoredPaths: ["app.popout", "app.openedPopoutName"],
        },
      }).concat(loggerMiddleware),
  });
};
