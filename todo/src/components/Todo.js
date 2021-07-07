import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/TodoReducer";
import "./Todo.css";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState();
  console.log(state);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {state.todos.map((todo, index) => {
        return (
          <div
            key={todo.text}
            onClick={() => dispatch({ type: "TOGGLE_TODO", index })}
            style={{
              textDecoration: todo.completed ? "line-through" : " "
            }}
          >
            {todo.text}
          </div>
        );
      })}
      <button onClick={() => dispatch({ type: "DELETE_TODO" })}>delete</button>
    </div>
  );
};

export default Todo;
