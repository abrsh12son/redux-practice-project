import { createSlice } from "@reduxjs/toolkit";
const IntialCounterState = {
    counter: 0,
    toggleCounter:false,
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState:IntialCounterState,
    reducers: {
        increment(state) {
          state.counter ++
              },
        decrement(state) {
           state.counter --
             },
        increase(state,action) {
           state.counter= state.counter+action.payload
        },
        toggle(state) {
           state.toggleCounter= !state.toggleCounter
        }
    }
})

export const counterAction=CounterSlice.actions
export default CounterSlice.reducer