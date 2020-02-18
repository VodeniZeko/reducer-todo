export const initialState = {
  todos: ["Learn about reducers"],
  text: "",
  completed: false,
  id: 3892987589
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        ...state,
        todos: [...state.todos, action.text]
      };
    default:
      return state;
  }
};
