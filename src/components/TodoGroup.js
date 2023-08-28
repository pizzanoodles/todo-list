import { useState } from "react";
import TodoItem from "./TodoItem";
const TodoGroup = (todoList) => {
    return (
        <div>
            <h1>List of Todo</h1>
            <TodoItem todoList={todoList} />
        </div>
    )
}
export default TodoGroup;