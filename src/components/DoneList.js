import { useSelector } from "react-redux";
import DoneGroup from "./DoneGroup";
const DoneList = () => {
    const tasks = useSelector((state) => state.todo.todoList);
    return (
        <div className="doneGroup">
            <h1 className="doneItemsHeader">Done Items:</h1>
            <DoneGroup todoItems={tasks} />
        </div>
    )
}
export default DoneList;