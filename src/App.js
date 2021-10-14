import React from "react";
import { Box, Container } from "@chakra-ui/react";

import { AppState } from "./context/AppState";
import TodoInput from "./components/TodoInput";

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
        <Box w="xl" p={10} bg="white" shadow="dark-lg" borderRadius="lg">
          <TodoInput />
        </Box>
      </Container>
    </AppState>
  );
};

export default App;
