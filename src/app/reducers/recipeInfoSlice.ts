import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInfo } from "../../models/IInfo";

interface IRecipeInfoState {
  recipeInfo: IInfo | null;
  recipeImage: string;
}

const initialState: IRecipeInfoState = {
  recipeInfo: null,
  recipeImage: "",
};

const recipeInfoSLice = createSlice({
  name: "recipeInfo",
  initialState,
  reducers: {
    setRecipeInfo(state, action: PayloadAction<IInfo>) {
      state.recipeInfo = action.payload;
      console.log(state.recipeInfo);
    },
    setRecipeImage(state, action: PayloadAction<string>) {
      state.recipeImage = action.payload;
    },
  },
});

export default recipeInfoSLice.reducer;
export const { setRecipeInfo, setRecipeImage } = recipeInfoSLice.actions;
