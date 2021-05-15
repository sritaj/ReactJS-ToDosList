import react, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ToDoContext } from "./Context/ToDoContext";
import todoReducer from "./Context/reducer";
import ToDoForm from "./Components/ToDoForm";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <ToDoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>ToDo App with Context API</h1>
      </Container>
      <ToDoForm></ToDoForm>
    </ToDoContext.Provider>
  );
};

export default App;
