import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

interface IControlsState {
  loaded: boolean;
  opened: boolean;
}

const initialState: IControlsState = {
  loaded: false,
  opened: false,
};

const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    isLoaded(state) {
      state.loaded = !state.loaded;
    },
    isOpen(state) {
      state.opened = !state.opened;
    },
  },
});

export default controlsSlice.reducer;
export const { isLoaded, isOpen } = controlsSlice.actions;
