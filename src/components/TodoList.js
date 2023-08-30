import { useEffect } from "react";
import { useTodos } from "../hooks/useTodos";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
const TodoList = (props) => {
    const loadTodos = useTodos();
    useEffect(() => {
        loadTodos();
    }, []);
    return (
        <div className="todoList">
            <div className="todoGroup">
                <TodoGroup isDone={props.isDone} />
            </div>
            <div className="todoGenerator">
                <TodoGenerator />
            </div>
        </div>
    )
}
export default TodoList;