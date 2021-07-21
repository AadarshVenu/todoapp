import del from "../assets/delete.svg";
import tick from "../assets/tick-green.svg";
import revert from "../assets/revert.svg";
import "./CompletedItem.css";

const CompletedTodoList = (props) => {
    return (
        <>
            <h2>Completed Item</h2>
            <ul className="bottom">
                {props.completedTodo.map((item) => (
                    <li key={item.id}>
                        <div className="items">
                            <img src={tick} alt="success" />
                            <p>
                                {item.id + 1 + ". "}
                                {item.title}
                            </p>
                        </div>

                        <div className="action">
                            <img
                                className="revert"
                                src={revert}
                                alt="revert"
                                onClick={() => props.onRevert(item)}
                            />
                            <img
                                src={del}
                                alt="delete"
                                onClick={() => props.onRemove(item.id)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CompletedTodoList;
