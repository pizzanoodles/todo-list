import { useNavigate } from "react-router-dom";
import "../css/doneGroup/doneGroup.css";
import { Space, Row, List, Typography } from "antd";
const DoneGroup = (props) => {
    const navigate = useNavigate();
    const todoItems = props.todoItems.filter((todoItem) => todoItem.done);
    const onClickTodoItem = (id) => {
        navigate("/done/" + id);
    };
    return (
        <List size="large"
            pagination = {{pageSize: 5}}
            bordered
            dataSource={todoItems}
            renderItem={(item) => (
                <List.Item key="Id" onClick={() => onClickTodoItem(item.id)}>{item.text}</List.Item>
            )}
        />
    )
}
export default DoneGroup;