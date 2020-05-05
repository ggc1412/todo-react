import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import "./App.css";

class App extends Component {

  state = {
    input:'',
    todos:[]
  }

  onCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input:'',
      todos: [input, ...todos]
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
    const { input } = this.state;
    return (
      <div>
        <TodoListTemplate form={<Form
          value={input}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          onCreate={this.onCreate}
        />}>
          todo list
        </ TodoListTemplate>
      </div>
    );
  }
}

export default App;
