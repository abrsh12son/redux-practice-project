import React from "react";
import Counter from "./counter/counter";
import TaskManager from "./taskManagment/taskManager";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-3xl">Redux toolKit</h1>
          <Counter />
          <TaskManager/>
    </div>
  );
};

export default App;
