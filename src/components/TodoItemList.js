import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { List } from "immutable";

const TodoItemList = ({ todos, onToggle, onRemove }) => {

    const todoList = todos.map(todo => (
        <TodoItem 
            key={todo.get('id')} 
            item={todo.toJS()}
            onToggle={onToggle}
            onRemove={onRemove}
        />));

    return(
        <div>   
            {todoList}
        </div>
    );
};

TodoItemList.prototype = {
    todos: PropTypes.instanceOf(List),
    onToggle: PropTypes.func,
    onRemove: PropTypes.func
};

TodoItemList.defaultProps = {
    todos: [],
    onToggle: () => console.warn("onToggle is not defined."),
    onRemove: () => console.warn("onRemove is not defined.")
}

export default TodoItemList;