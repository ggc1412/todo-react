import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    render(){
        const { item:{id, text, checked}, onToggle, onRemove } = this.props;
        console.log(this.props.item);
        return(
            <div className="todo-item" onClick={()=>onToggle(id)}>
                <div className="item-remove" onClick={
                    (e)=> { e.stopPropagation();
                    onRemove(id)}}>
                    ❌
                </div>
                <div className={`item-text ${ checked && "checked" }`}>
                    {text}
                </div>
        { checked && <div className="item-check">✔</div> }
            </div>
        )
    }
}

export default TodoItem;