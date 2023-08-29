import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
const TodoList = () => {
    return (
        <div className="todoList">
            <div className="todoGroup">
                <TodoGroup />
            </div>
            <div className="todoGenerator">
                <TodoGenerator />
            </div>
        </div>
    )
}
export default TodoList;