import TodoItem from "./TodoItem";
const TodoGroup = ({todoList}) => {
    return (
        <div>
            <h1>To-Do List:</h1>
            <table className="todoTable">
                {todoList.map((todoItem) => <tr className="todoItem"><td><TodoItem todoItem={todoItem} /></td></tr>)}
            </table>
        </div>
    )
}
export default TodoGroup;