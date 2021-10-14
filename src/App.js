import React from "react";
import { Box, Container, Divider } from "@chakra-ui/react";

import { AppState } from "./context/AppState";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <AppState>
      <Container
        minWidth="100%"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily="Nunito"
        color="blackAlpha.700"
      >
        <Box w="xl" p={10} shadow="dark-lg" borderRadius="lg">
          <TodoInput />
          <Divider mb={5}></Divider>
          <TodoList />
        </Box>
      </Container>
    </AppState>
  );
};

export default App;
