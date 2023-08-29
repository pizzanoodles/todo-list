import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useState } from "react";
import { useSelector } from "react-redux";
const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const selector = useSelector((state) => state.todo.todoList);
    console.log(selector);
    return (
        <div className="todoList">
            <div className="todoGroup">
                <TodoGroup todoList={selector}/>
            </div>
            <div className="todoGenerator">
                <TodoGenerator todoList={todoList} setTodoList={setTodoList} />
            </div>
        </div>
    )
}
export default TodoList;