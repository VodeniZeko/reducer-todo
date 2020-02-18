import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/TodoReducer";
import "./Todo.css";

const Todo = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);
  const [text, setText] = useState();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {state.todos.map(todo => {
        return <div>{todo}</div>;
      })}
    </div>
  );
};

export default Todo;
