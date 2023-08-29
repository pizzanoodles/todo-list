import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: [],
        latestId: 0
    },
    reducers: {
        addTodo: (state, action) => {
            state.latestId++;
            action.payload.id = state.latestId;
            state.todoList.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todoList.splice(action.payload, 1);
        },
        toggleDone: (state, action) => {
            state.todoList[action.payload].done = !state.todoList[action.payload].done;
        }
    }
});
export const { addTodo, deleteTodo, toggleDone } = todoSlice.actions;
export default todoSlice.reducer;