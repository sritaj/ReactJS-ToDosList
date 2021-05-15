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
  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo" //TODO Value, OnChange
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
