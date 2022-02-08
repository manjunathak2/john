import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState("");
  return (
    <div className='container'>
      <div className='app-wraper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
