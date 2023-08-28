import TodoItem from "./TodoItem";
const TodoGroup = (todoList) => {
    return (
        <div>
            <h1>To-Do List:</h1>
            <TodoItem todoList={todoList} />
        </div>
    )
}
export default TodoGroup;