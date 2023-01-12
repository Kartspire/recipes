import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from "../../models/IRecipe";

interface IRecipesState {
  recipes: IRecipe[];
}

const initialState: IRecipesState = {
  recipes: [],
};

const recipesSLice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes(state, action: PayloadAction<IRecipe[]>) {
      state.recipes = action.payload;
    },
  },
});

export default recipesSLice.reducer;
export const { setRecipes } = recipesSLice.actions;
