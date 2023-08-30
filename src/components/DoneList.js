import { useDispatch, useSelector } from "react-redux";
import DoneGroup from "./DoneGroup";
const DoneList = () => {
    const tasks = useSelector((state) => state.todo.todoList);
    return (
        <div>
            <h1>Done Items</h1>
            <DoneGroup todoItems={tasks} />
        </div>
    )
}
export default DoneList;