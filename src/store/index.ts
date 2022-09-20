import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { useDispatch } from "react-redux";
import themeStateReducer from "./modules/Theme.store";
//import favoriteStateData from "./modules/Favorite.store";

// a linha 17 middleware: está desabilitando um warn chato que dizia que o state
// era muito grande

const rootReducers = combineReducers({
  //favoriteStateData: favoriteStateData,
  themeState: themeStateReducer,
});

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
