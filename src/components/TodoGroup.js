import { Button, Form, Input, Modal, Space, Table, message } from "antd";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch, useSelector } from "react-redux";
import * as todoApi from "../api/todoApi";
import "../css/todoList/todolist.css";
import { resetTodoTask } from "./TodoSlice";
const TodoGroup = (props) => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todo.todoList);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(-1);
    const [form] = Form.useForm();
    const [api, contextHolder] = message.useMessage();
    const columns = [
        {
            title: "Task",
            dataIndex: "text",
            key: "task",
            width: "75%",
            render: (_, record) => (<span className={record.done ? "tdDoneTodo" : "tdNotDoneTodo"}
                onClick={() => onToggleHandler(record.id)}>{record.text}</span>)
        },
        {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            width: "10%",
            render: (_, record) => <Space>
                <Button type="primary" className="editBtn" onClick={() => showModal(record.id)}>Edit</Button>
                <Button type="primary" danger onClick={() => confirmDelete(record.id)} className="deleteBtn">Delete</Button>
            </Space>
        }
    ];
    const confirmDelete = (id) => {
        confirmAlert({
            title: "Confirm delete of task",
            message: "Are you sure you want to delete this task?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => onDeleteHandler(id)
                },
                {
                    label: "No"
                }
            ]
        })
    };
    const onDeleteHandler = async (id) => {
        await todoApi.deleteTodoTask(id);
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoTask(response.data));
        alertSuccess("Delete");
    };
    const alertSuccess = (action) => {
        api.open({
            type: "success",
            content: `${action} success!`,
            duration: 3
        });
    };
    const onToggleHandler = async (id) => {
        let taskToBeUpdated = tasks.find(task => task.id === id);
        await todoApi.updateTodoTask(id, { done: !taskToBeUpdated.done });
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoTask(response.data));
    };
    const showModal = (id) => {
        setIsModalOpen(true);
        setSelectedTask(id);
    };
    const onFormSubmit = async (values) => {
        await todoApi.updateTodoText(selectedTask, { text: values.newTask });
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoTask(response.data));
        handleCloseModal();
        form.resetFields();
        alertSuccess("Edit task");
    }
    const handleCloseModal = () => { setIsModalOpen(false); form.resetFields(); };
    return (
        <div>
            {contextHolder}
            <h1 className="todoListHeader">To-Do List:</h1>
            <Modal
                getContainer={false}
                forceRender={true}
                title="Edit text"
                open={isModalOpen}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
                footer={null}>
                <Form form={form} name="form" onFinish={onFormSubmit}>
                    <Form.Item
                        label="New task"
                        name="newTask"
                        rules={[
                            {
                                required: true,
                                message: "New task cannot be empty!"
                            }
                        ]}>
                        <Input placeholder={"Enter new text"} />
                    </Form.Item>
                    <Space size={"middle"}>
                        <Form.Item>
                            <Button type="primary" className="submitBtn" htmlType="submit">Submit</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="default" className="cancelBtn" onClick={handleCloseModal}>Cancel</Button>
                        </Form.Item>
                    </Space>
                </Form>
            </Modal>
            <Table rowKey="Id" key="Id" className="todoTable" columns={columns} dataSource={tasks} pagination={{ pageSize: 5 }} />
        </div>
    )
}
export default TodoGroup;