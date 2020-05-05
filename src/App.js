import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';

const App = () => {
  return (
    <div>
      <TodoListTemplate form={<Form/>}>
        <div>children??</div>
      </ TodoListTemplate>
    </div>
  );
}

export default App;
