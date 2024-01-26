import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  theme: "light" | "dark";
}

const initialState: CounterState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.theme = "dark";
    },
    lightMode: (state) => {
      state.theme = "light";
    },
  },
});

export const { darkMode, lightMode } = themeSlice.actions;

export default themeSlice.reducer;

export const selectTheme = (state: RootState) => state.theme;
