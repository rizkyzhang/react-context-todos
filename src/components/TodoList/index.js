import React from "react";
import { useAppContext } from "../../context/AppState";
import { Stack } from "@chakra-ui/react";

import TodoItem from "../TodoItem";

const TodoList = () => {
  const { todos } = useAppContext();

  return (
    <Stack pacing={5}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Stack>
  );
};

export default TodoList;
