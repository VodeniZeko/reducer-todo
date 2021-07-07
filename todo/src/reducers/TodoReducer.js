export const initialState = {
  todos: []
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
            id: new Date().toLocaleTimeString()
          }
        ]
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}
