import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import controlsSlice from "./reducers/controlsSlice";
import loadingSlice from "./reducers/controlsSlice";
import recipeInfoSlice from "./reducers/recipeInfoSlice";
import recipesSlice from "./reducers/recipesSlice";
import searchSlice from "./reducers/searchSlice";

export const store = configureStore({
  reducer: {
    controls: controlsSlice,
    recipes: recipesSlice,
    search: searchSlice,
    recipeInfo: recipeInfoSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
