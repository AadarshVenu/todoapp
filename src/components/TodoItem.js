import del from "../assets/delete.svg";
import "./TodoItem.css";

const TodoItem = (props) => {
    return (
        <>
            <h2>Things to be Done</h2>
            <ul className="top">
                {props.todos.map((item) => (
                    <li key={item.id} className="todolist">
                        <div>
                            <input
                                type="radio"
                                onClick={() => props.onAddComplete(item)}
                            />
                            <p>
                                {item.id + 1 + ". "}
                                {item.title}
                            </p>
                        </div>

                        <img
                            src={del}
                            alt="delete"
                            onClick={() => props.onRemove(item.id)}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoItem;
