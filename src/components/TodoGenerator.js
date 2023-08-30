import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, resetTodoTask } from "./TodoSlice";
import "../css/todoGenerator/todoGenerator.css";
import * as todoApi from "../api/todoApi";
import {Input, Button, message, notification} from 'antd';
const TodoGenerator = () => {
    const [api, contextHolder] = message.useMessage();
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();
    const alertInvalidInput = () => {
        api.open({
            type: "error",
            content: "Please enter a valid input for your today's task.",
            duration: 3
        });
    };
    const alertSuccess = (action) => {
        api.open({
            type: "success",
            content: `${action} success!`,
            duration: 3
        });
    };
    const onAddHandler = async() => {
        if (userInput.trim() !== "") {
            await todoApi.createTodoTask({text: userInput, done: false});
            const response = await todoApi.getTodoTasks();
            if (response.status === 200) {
                alertSuccess("Create task");
            }
            dispatch(resetTodoTask(response.data));
            setUserInput("");
        } else {
            alertInvalidInput();
            setUserInput("");
        }
    }

    const onChangeHandler = (event) => {
        setUserInput(event.target.value);
    }
    return (
        <div>
            {contextHolder}
            <Input className="todoInput" type="text" onChange={onChangeHandler} value={userInput} placeholder="What's on your agenda today?"/> 
            <Button className="btnAdd" onClick={onAddHandler} type="submit">Add</Button>
        </div>
    )
}
export default TodoGenerator;