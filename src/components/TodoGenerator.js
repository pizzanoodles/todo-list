import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, resetTodoTask } from "./TodoSlice";
import { v4 as uuid } from "uuid";
import * as todoApi from "../api/todoApi";
const TodoGenerator = () => {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();
    const onAddHandler = async() => {
        if (userInput.trim() !== "") {
            await todoApi.createTodoTask({text: userInput, done: false});
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoTask(response.data));
            setUserInput("");
        } else {
            alert("Invalid input");
            setUserInput("");
        }
    }

    const onChangeHandler = (event) => {
        setUserInput(event.target.value);
    }
    return (
        <div>
            <input className="todoInput" type="text" onChange={onChangeHandler} value={userInput} placeholder="What's on your agenda today?"/> 
            <button className="btnAdd" onClick={onAddHandler} type="submit">Add</button>
        </div>
    )
}
export default TodoGenerator;