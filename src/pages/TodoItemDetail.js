import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../css/todoItemDetail/todoItemDetail.css";
import { FloatButton } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
const TodoItemDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const todoItem = useSelector((state) => state.todo.todoList.find((todoItem) => todoItem.id === id));
    const goBackPage = () => {
        navigate(-1);
    }
    return (
        <div className="todoItemDetail">
            <FloatButton
            onClick={() => goBackPage()}
                icon={<RollbackOutlined />} 
                type="primary"
                style={{
                    left:490,
                    top:210
                }}
                />
            <h1>Todo Item Details:</h1>
            <p>Task ID: {todoItem.id}</p>
            <p>Task Description: {todoItem.text}</p>
        </div>
    )
};
export default TodoItemDetail;