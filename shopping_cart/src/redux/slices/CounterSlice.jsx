import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

const initialState = {
    value : 0,
}
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        }
    }
}); 

export const {increment,decrement} = CounterSlice.actions;
//export const value = (state) => state.value;
export default CounterSlice.reducer;
//const store = CounterSlice(reducer);
//export default store;
