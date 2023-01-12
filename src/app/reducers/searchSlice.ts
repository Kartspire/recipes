import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchState {
  searchQuery: string;
}

const initialState: ISearchState = {
  searchQuery: "",
};

const searchSLice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export default searchSLice.reducer;
export const { setSearchQuery } = searchSLice.actions;
