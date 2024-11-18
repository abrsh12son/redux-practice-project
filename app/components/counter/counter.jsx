"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "./counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.counter);
  const toggleState = useSelector((state) => state.counter.toggleCounter);
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-5">
        <h1 className="text-xl font-bold text-center mb-4">Redux Management</h1>
        <h2 className="text-3xl font-semibold text-center mb-6">
          {counterValue}
        </h2>

        {toggleState ? (
          <h2 className="text-2xl font-semibold text-center mb-6 mt-2">
            {counterValue >0 ?<p>I reach {counterValue} 😆😆😆</p>:<p>Ohhh! I am still below 1 😒😒</p>}
          </h2>
        ) : (
          ""
        )}
        <div className="flex justify-around mb-4">
          <button
            onClick={() => dispatch(counterAction.increment())}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(counterAction.decrement())}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(counterAction.increase(5))}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            Increase by 5
          </button>
        </div>
        <button
          onClick={() => dispatch(counterAction.toggle())}
          className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-200"
        >
          {!toggleState ? "show Message" : "hide Message"}
        </button>
      </div>
    </div>
  );
}
