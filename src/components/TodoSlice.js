import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        }
    }
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;