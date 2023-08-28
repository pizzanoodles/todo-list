import { useState } from "react";
const TodoGenerator = ({ todoList, setTodoList }) => {
    const [userInput, setUserInput] = useState("");
    const onAddHandler = () => {
        if (userInput !== "") {
            setTodoList([...todoList, userInput]);
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