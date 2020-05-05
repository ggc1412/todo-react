import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import "./App.css";

const App = () => {
  return (
    <div>
      <TodoListTemplate form={<Form/>}>
        todo list
      </ TodoListTemplate>
    </div>
  );
}

export default App;
