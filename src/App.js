import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import "./App.css";
import TodoItemList from './components/TodoItemList';

class App extends Component {

  state = {
    input:'',
    todos:[]
  }

  onCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input:'',
      todos: [{
        id:Date.now(),
        input
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
