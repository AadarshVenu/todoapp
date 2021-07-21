import "./App.css";

import TodoList from "./components/TodoList";

function App() {
    return (
        <>
            <div  className="todo">
                <h1>MY TODO LIST</h1>
                <TodoList />
            </div>
        </>
    );
}

export default App;
