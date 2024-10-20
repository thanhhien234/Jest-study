import { ToDoItemWrapper } from './ToDoItem.styles';
import modifyIcon from '../../assets/modify-icon.png';
import deleteIcon from '../../assets/delete-icon.png';
import checkedBox from '../../assets/checked-box.png';
import uncheckedBox from '../../assets/unchecked-box.png';
import useDeleteItem from '../../hooks/useDeleteItem';
import useCheckTodo from '../../hooks/useCheckTodo';
import { ToDoItemInterface } from '../../interface';
import useModalIsOpen from '../../store/useModalIsOpen';
import useSelectedItem from '../../store/useSelectedItem';

const ToDoItem = ({ item }: { item: ToDoItemInterface }) => {
    const { deleteTodo } = useDeleteItem();
    const { checkTodo } = useCheckTodo();
    const { setIsOpen } = useModalIsOpen();
    const { setSelectedItem } = useSelectedItem();

    return (
        <ToDoItemWrapper $isCompleted={item.isCompleted}>
            {item.isCompleted ? (
                <img src={checkedBox}
                     alt="checked" 
                     onClick={() => checkTodo(item.id, item.isCompleted)}
                />
            ) : (
                <img
                    src={uncheckedBox}
                    alt="unchecked"
                    onClick={() => checkTodo(item.id, item.isCompleted)}
                />
            )}
            <span>{item.content}</span>
            <img src={modifyIcon} 
                 alt="modify" 
                 onClick={() => {
                    setIsOpen(true);
                    setSelectedItem(item);
                }}
            />
            <img src={deleteIcon}
                 alt="delete"
                 onClick={()=>deleteTodo(item.id)}
            />
        </ToDoItemWrapper>
    )
}

export default ToDoItem;