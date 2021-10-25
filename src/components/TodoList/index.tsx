import React from "react";
import { useAppContext } from "../../context/AppState";
import { Stack } from "@chakra-ui/react";

import TodoItem from "../TodoItem";

export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const TodoList: React.FC = (): JSX.Element => {
  const { todos } = useAppContext();

  return (
    <Stack spacing={5}>
      {todos.map(
        (todo: ITodo): JSX.Element => (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </Stack>
  );
};

export default TodoList;
