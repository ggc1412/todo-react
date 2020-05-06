import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    render(){
        const { text, checked } = this.props.item;
        console.log(this.props.item);
        return(
            <div className="todo-item">
                <div className="item-remove">
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