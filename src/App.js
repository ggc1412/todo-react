import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import "./App.css";
import TodoItemList from './components/TodoItemList';

class App extends Component {

  state = {
    input:'',
    todos:[{
      id: 1,
      text: "리액트 공부하기",
      checked: false
    },
    {
      id: 2,
      text: "택배 보내기",
      checked: true
    },
    {
      id: 3,
      text: "잘 자기",
      checked: false
    }]
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input:'',
      todos: [{
        id:Date.now(),
        text:input,
        checked:false
      }, ...todos]
    })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    })
  }

  handleKeyPress = (e) => {
    if(e.key === "Enter"){
      this.onCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex( todo => todo.id === id );
    const nextTodos = [...todos];
    const prevProps = nextTodos[index];
    nextTodos[index] ={
      ...prevProps,
      checked: !prevProps.checked
    }
    this.setState({
      todos: nextTodos
    })

  }

  handleRemove = () => {
    
  }

  render(){
    const { input, todos } = this.state;
    return (
      <div>
        <TodoListTemplate form={<Form
          value={input}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onCreate={this.handleCreate}
        />}>
          <TodoItemList 
            todos={todos} 
            onToggle={this.handleToggle} 
            onRemove={this.handleRemove}/>
        </ TodoListTemplate>
      </div>
    );
  }
}

export default App;
