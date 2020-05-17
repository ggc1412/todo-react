import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import "./styles/App.module.scss";
import TodoItemList from './components/TodoItemList';
import Pallete from './components/Pallete';

class App extends Component {
  state = {
    input:'',
    colors:[
      { id: 1, text: 'black', selected: true }, 
      { id: 2, text: 'red', selected: false }, 
      { id: 3, text: 'green', selected: false }, 
      { id: 4, text: 'blue', selected: false } ],
    todos:[{
      id: 1,
      text: "리액트 공부하기",
      checked: false,
      color: 'black'
    },
    {
      id: 2,
      text: "택배 보내기",
      checked: true,
      color: 'red'
    },
    {
      id: 3,
      text: "잘 자기",
      checked: false,
      color: 'green'
    }]
  }

  handleCreate = () => {
    const { input, todos, colors } = this.state;
    const selectedColor = colors.find( color => color.selected === true )
    console.log(selectedColor);
    this.setState({
      input:'',
      todos: [{
        id:Date.now(),
        text:input,
        checked:false,
        color: selectedColor.text
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
      this.handleCreate();
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

  handleRemove = (id) => {
    const { todos }= this.state;
    const nextTodos = todos.filter( todo => todo.id !== id );
    this.setState({
      todos:nextTodos
    })
  }

  handleColor = (id) => {
    const { colors } = this.state;
    const nextColors = colors.map( color => {
      if(color.id === id){
        return { ...color, selected:true }
      }
        return { ...color, selected:false }
    })

    this.setState({
      colors: nextColors
    })

  }

  render(){
    const { input, todos, colors } = this.state;
    return (
      <div>
        <TodoListTemplate form={<Form
          value={input}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onCreate={this.handleCreate}
        />}
        color={<Pallete onColor={this.handleColor} colors={colors}/>}
        >
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
