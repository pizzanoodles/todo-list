const Todo = (todoList) => {
    return (
        <table className="todoTable">
            {todoList.todoList.todoList.map((todoItem) => <tr className="todoItem"><td>{todoItem}</td></tr>)}
        </table>

    )
}
export default Todo;