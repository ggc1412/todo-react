import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    render() {
        const { todos } = this.props;

        const todoList = todos.map( todo => <TodoItem key={todo.id} item={todo}/>)

        return(
            <div>   
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;