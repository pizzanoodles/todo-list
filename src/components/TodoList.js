import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useState } from "react";
const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    return (
        <div className="todoList">
            <div className="todoGroup">
                <TodoGroup todoList={todoList}/>
            </div>
            <div className="todoGenerator">
                <TodoGenerator todoList={todoList} setTodoList={setTodoList} />
            </div>
        </div>
    )
}
export default TodoList;