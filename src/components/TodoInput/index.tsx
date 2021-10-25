import React, { useState } from "react";
import { Button, Heading, Input, Stack } from "@chakra-ui/react";

import { useAppContext } from "../../context/AppState";

const TodoInput: React.FC = (): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const { dispatch } = useAppContext();

  const handleAddTodo = (): void => {
    setInput("");
    dispatch({ type: "ADD_TODO", id, text: input });
    setId(id + 1);
  };

  return (
    <Stack spacing={5} mb={5}>
      <Heading as="h2" fontFamily="inherit" textAlign="center">
        Context Todos
      </Heading>
      <Input
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && input.trim().length > 0 && handleAddTodo()
        }
        value={input}
        placeholder="Enter a new todo"
        bg="white"
        border="2px solid"
        borderColor="gray.200"
      ></Input>
      <Button
        onClick={(e) => input.trim().length > 0 && handleAddTodo()}
        bg="blue.300"
        color="white"
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        Add a new todo
      </Button>
    </Stack>
  );
};

export default TodoInput;
