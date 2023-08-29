import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";
const TodoGenerator = () => {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();
    const onAddHandler = () => {
        if (userInput !== "") {
            dispatch(addTodo({
                id: null,
                text: userInput,
                done: false
            }));
            setUserInput("");
        }
    }

    const onChangeHandler = (event) => {
        setUserInput(event.target.value);
    }
    return (
        <div>
            <input className="todoInput" type="text" onChange={onChangeHandler} value={userInput} placeholder="Enter text here"/> 
            <button className="btnAdd" onClick={onAddHandler} type="submit">Add</button>
        </div>
    )
}
export default TodoGenerator;