
import TaskTable from "../components/TaskTable";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

export default function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <h1 className="mb-10 ">TanStack Table</h1>

        <TaskTable />
      </ChakraProvider>
    </>
  );
}
