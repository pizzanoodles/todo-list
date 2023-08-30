import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, resetTodoTask } from "./TodoSlice";
import { confirmAlert } from "react-confirm-alert";
import * as todoApi from "../api/todoApi";
import "react-confirm-alert/src/react-confirm-alert.css";
const TodoGroup = (props) => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todo.todoList);
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
    const onDeleteHandler = async(index) => {
        await todoApi.deleteTodoTask(tasks[index].id);
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoTask(response.data));
        // dispatch(deleteTodo(index))
    }
    const onToggleHandler = async(index) => {
        await todoApi.updateTodoTask(tasks[index].id, {done: !tasks[index].done});
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoTask(response.data));
        // dispatch(toggleDone(index))
    }
    return (
        <div>
            <h1>To-Do List:</h1>
            <table className="todoTable">
                <tbody>
                    {tasks.map((task, index) => <tr key={index} className="todoItem">
                        <td className={task.done ? "tdDoneTodo" : "tdNotDoneTodo"} onClick={() => onToggleHandler(index)}><TodoItem todoItem={task} index={index}/></td>
                        <td className="tdDeleteBtn"><button className="deleteBtn" onClick={() => confirmDelete(index)}>X</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default TodoGroup;