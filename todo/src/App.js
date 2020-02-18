import React, { useReducer, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  // const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  // const [text, setText] = useState();

  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;
