import React from "react";
import { ActionType } from "./AppActions";

export interface IAction {
  type: ActionType;
  id: number;
  text?: string;
}

export interface ITodos {
  id?: number;
  text?: string;
  isCompleted?: boolean;
}

const reducer: React.Reducer<ITodos[], IAction> = (todos, action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          isCompleted: false,
        },
      ];
    case ActionType.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.id);
    case ActionType.TOGGLE_TODO:
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
