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
        p={5}
        fontFamily="Nunito"
        color="blackAlpha.700"
      >
        <Box w="xl" p={10} shadow="dark-lg" borderRadius="lg">
          <TodoInput />
          <Divider h={0.5} mb={5} bg="gray.300"></Divider>
          <TodoList />
        </Box>
      </Container>
    </AppState>
  );
};

export default App;
