import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    render() {
        const { todos, onToggle } = this.props;

        const todoList = todos.map( todo => <TodoItem 
            key={todo.id} 
            item={todo}
            onToggle={onToggle}
            />)

        return(
            <div>   
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;