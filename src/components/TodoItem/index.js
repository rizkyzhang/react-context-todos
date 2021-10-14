import React from "react";
import { useAppContext } from "../../context/AppState";
import { Checkbox, Flex, Spacer, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const TodoItem = ({ todo }) => {
  const { dispatch } = useAppContext();

  return (
    <Flex
      align="center"
      p={3}
      bg={todo.isCompleted ? "green.100" : "gray.100"}
      borderRadius="lg"
    >
      <Text textDecoration={todo.isCompleted && "line-through"}>
        {todo.text}
      </Text>
      <Spacer></Spacer>
      <Checkbox
        onChange={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
        size="md"
        mr={3}
        borderColor="blackAlpha.700"
        aria-label="Toggle"
      ></Checkbox>
      <DeleteIcon
        onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
        color="red.500"
        cursor="pointer"
        aria-label="Delete"
      ></DeleteIcon>
    </Flex>
  );
};

export default TodoItem;
