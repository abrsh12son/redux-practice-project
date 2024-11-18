"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice.jsx";
import taskReducer from '../taskManagment/taskSlice.jsx'


const store = configureStore({
  reducer: {
        counter: counterReducer,
        task:taskReducer
  },
});
export default store;
