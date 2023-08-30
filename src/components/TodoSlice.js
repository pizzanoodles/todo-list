import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: []
    },
    reducers: {
        resetTodoTask: (state, action) => {
            state.todoList = action.payload;
        }
    }
});
export const { addTodo, deleteTodo, toggleDone, resetTodoTask } = todoSlice.actions;
export default todoSlice.reducer;