import { useState, useEffect } from "react";
import CompletedTodoList from "./CompletedTodo";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const getLocalItem = () => {
    let list = localStorage.getItem("list");

    if (list) {
        return JSON.parse(localStorage.getItem("list"));
    } else {
        return [];
    }
};

const getCompletedItem = () => {
    let list = localStorage.getItem("completedlist");

    if (list) {
        return JSON.parse(localStorage.getItem("completedlist"));
    } else {
        return [];
    }
};

const getItemCount = () => {
    let count = localStorage.getItem("itemCount");

    if (count) {
        return JSON.parse(localStorage.getItem("itemCount"));
    } else {
        return 0;
    }
};

const TodoList = () => {
    const [todos, setTodos] = useState(getLocalItem());
    const [completedTodo, setcompletedTodo] = useState(getCompletedItem());
    const [itemsCount, setItemsCount] = useState(getItemCount());

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        localStorage.setItem("completedlist", JSON.stringify(completedTodo));
    }, [completedTodo]);

    useEffect(() => {
        localStorage.setItem("itemCount", JSON.stringify(itemsCount));
    }, [itemsCount]);
    
    const AddTodohandler = (todo) => {
        setTodos((prevTodo) => [...prevTodo, { id: itemsCount, ...todo }]);
        setItemsCount(itemsCount + 1);
        // console.log(todo);
    };

    const removeTodoHandler = (todoId, isTodoList) => {
        if (isTodoList) {
            setTodos((prevTodo) =>
                prevTodo.filter((todo) => todo.id !== todoId)
            );
        } else {
            setcompletedTodo((prevTodo) =>
                prevTodo.filter((todo) => todo.id !== todoId)
            );
        }
    };

    const onAddComplete = (completedTodo) => {
        setcompletedTodo((preCompletedTodo) => [
            ...preCompletedTodo,
            completedTodo,
        ]);
        setTodos((prevTodo) =>
            prevTodo.filter((todo) => todo.id !== completedTodo.id)
        );
        // console.log(completedTodo);
    };

    const onRevertHandler = (completedTodo) => {
        setcompletedTodo((prevTodo) =>
            prevTodo.filter((todo) => todo.id !== completedTodo.id)
        );
        setTodos((prevTodo) => [...prevTodo, completedTodo]);
    };

    return (
        <>
            <TodoItem
                todos={todos}
                onAddComplete={onAddComplete}
                onRemove={(id) => removeTodoHandler(id, true)}
            />
            <TodoForm AddTodo={AddTodohandler} />
            <CompletedTodoList
                completedTodo={completedTodo}
                onRemove={removeTodoHandler}
                onRevert={onRevertHandler}
            />
        </>
    );
};

export default TodoList;
