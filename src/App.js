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

  onCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input:'',
      todos: [{
        id:Date.now(),
        text:input
      }, ...todos]
    })
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    })
  }

  onKeyPress = (e) => {
    if(e.key === "Enter"){
      this.onCreate();
    }
  }

  render(){
    const { input, todos } = this.state;
    return (
      <div>
        <TodoListTemplate form={<Form
          value={input}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          onCreate={this.onCreate}
        />}>
          <TodoItemList todos={todos}/>
        </ TodoListTemplate>
      </div>
    );
  }
}

export default App;
