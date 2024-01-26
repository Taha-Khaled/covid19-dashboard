import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  state?: { label: string; value: string };
}

const initialState: CounterState = {
  state: undefined,
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { changeState } = stateSlice.actions;

export default stateSlice.reducer;

export const selectState = (state: RootState) => state.state;
