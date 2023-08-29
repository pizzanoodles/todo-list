import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleDone } from "./TodoSlice";
const TodoGroup = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.todo.todoList);
    const onDeleteHandler = (index) => {
        dispatch(deleteTodo(index))
    }
    const onToggleHandler = (index) => {
        dispatch(toggleDone(index))
    }
    return (
        <div>
            <h1>To-Do List:</h1>
            <table className="todoTable">
                {selector.map((todoItem, index) => <tr key={index} className="todoItem">
                    <td className={todoItem.done ? "done" : ""} onClick={() => onToggleHandler(index)}><TodoItem todoItem={todoItem} />
                        <button onClick={() => onDeleteHandler(index)}>X</button></td>
                </tr>)}
            </table>
        </div>
    )
}
export default TodoGroup;