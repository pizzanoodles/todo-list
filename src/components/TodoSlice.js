import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: []
    },
    reducers: {
        resetTodoTask: (state, action) => {
            state.todoList = action.payload;
        },
        addTodo: (state, action) => {
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
export const { addTodo, deleteTodo, toggleDone, resetTodoTask } = todoSlice.actions;
export default todoSlice.reducer;