import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";
import { ToDoContext } from "../Context/ToDoContext";
import { ADD_TODO } from "../Context/action.types";

const ToDoForm = () => {
  const [toDoString, setToDoString] = useState("");
  const { dispatch } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDoString === "") {
      return alert("Please enter a To Do");
    }

    const todo = {
      toDoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setToDoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={toDoString}
            onChange={(e) => setToDoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button
              color="warning" //TODO:onclick
            >
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default ToDoForm;
