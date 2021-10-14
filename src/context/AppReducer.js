import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./AppActions";

const reducer = (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        } else {
          return todo;
        }
      });
    default:
      return todos;
  }
};

export default reducer;
