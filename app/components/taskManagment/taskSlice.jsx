import { createSlice } from "@reduxjs/toolkit";
const initialTask = {
    tasks: [],
    nextId:0
}

const taskSlice=createSlice({
    name: 'task',
    initialState: initialTask,
    reducers: {
        AddTask(state, action) {
            state.tasks = [
                ...state.tasks, // Spread the existing tasks
                { // Create a new task object
                    id: ++state.nextId, // Generate a unique 
                    text: action.payload.text, // Task text from the action payload
                    completed: false, // Task is initially marked as not completed
                },
            ];
            
        },
        RemoveTask(state, action) {
            state.tasks= state.tasks.filter(task=>task.id!==action.payload.id)
            
        },
        ToggleTask(state, action) {
            const toggling = state.tasks.find(task => task.id === action.payload.id)
            if (toggling) {
                toggling.completed=!toggling.completed
            }
            
        },
    }
})
export const { AddTask, RemoveTask, ToggleTask }=taskSlice.actions;
export default taskSlice.reducer
