import DoneItem from "./DoneItem";
const DoneGroup = (props) => {
    const todoItems = props.todoItems.filter((todoItem) => todoItem.done);
    return todoItems.map((todoItem) => {
        return (
            <DoneItem todoItem={todoItem}
            key={todoItem.id} />
        )
    })
}
export default DoneGroup;