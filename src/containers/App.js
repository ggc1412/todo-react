import React, { Component } from "react";
import TodoListTemplate from "../components/TodoListTemplate";
import "../styles/App.module.scss";
import PalleteContainer from "./PalleteContainer";
import TodoItemContainer from "./ToDoContainer";
import FormContainer from "./FormContainer";

class App extends Component {
  render() {
    return (
      <div>
        <TodoListTemplate form={<FormContainer />} color={<PalleteContainer />}>
          <TodoItemContainer />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
