import React, { useRef, useState } from 'react';
import { AddTask, RemoveTask, ToggleTask } from './taskSlice'
import { useDispatch, useSelector } from 'react-redux';

// TaskManager component to manage tasks
const TaskManager = () => {
    const [taskText, setTaskText] = useState('')
    const inputRef=useRef()
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.task.tasks)
    

    // Function to handle adding a new task
    const handleAddTask = () => {
        if (taskText.trim() === '') return// Check if input is not empty
        dispatch(AddTask({ text: taskText }))
        setTaskText(''); // Clear the input field
        inputRef.current.focus(); // Focus the input field again after adding the task

        
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">My Tasks</h2>
            <div className="flex mb-4 gap-2">
                <input
                    type="text"
                    value={taskText}
                    ref={inputRef}
                    onChange={(e) => setTaskText(e.target.value)} // Update local state on input change
                    className="border border-gray-300 p-1 ring-1 ring-blue-300 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a new task..."
                />
                <button
                    onClick={handleAddTask} // Handle adding a task
                    className="bg-blue-700 text-white px-4 rounded-r-md hover:bg-blue-500 transition duration-200"
                >
                    Add Task
                </button>
            </div>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li key={task.id} className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                
                                checked={task.completed}// Checkbox reflects task's completion status
                                onChange={()=>dispatch(ToggleTask({id:task.id}))}
                                className="mr-2 "
                            />
                            <span onClick={()=>dispatch(ToggleTask({id:task.id}))}
                                className={`${task.completed ? 'line-through text-green-700' : 'text-gray-800'} w-[400px] break-words`}>
                                {task.text}
                            </span>
                        </div>
                        <button onClick={() => dispatch(RemoveTask({ id: task.id }))}
                            className={`${task.completed?"bg-green-800 hover:bg-green-600":"bg-red-600 hover:bg-red-400"} text-white px-2 rounded-md  transition duration- ml-10 `}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;