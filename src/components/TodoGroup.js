import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleDone } from "./TodoSlice";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const TodoGroup = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.todo.todoList);
    const confirmDelete = (index) => {
        confirmAlert({
            title: "Confirm delete of task",
            message: "Are you sure you want to delete this task?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => onDeleteHandler(index)
                },
                {
                    label: "No"
                }
            ]
        })
    }
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
                <tbody>
                    {selector.map((todoItem, index) => <tr key={index} className="todoItem">
                        <td className={todoItem.done ? "tdDoneTodo" : "tdNotDoneTodo"} onClick={() => onToggleHandler(index)}><TodoItem todoItem={todoItem} /></td>
                        <td className="tdDeleteBtn"><button className="deleteBtn" onClick={() => confirmDelete(index)}>X</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default TodoGroup;