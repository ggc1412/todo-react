import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState){
        const { item } = this.props;
        return item.checked !== nextProps.item.checked
    }


    render(){
        const { item:{id, text, checked}, onToggle, onRemove } = this.props;
        return(
            <div className="todo-item" onClick={()=>onToggle(id)}>
                <div className="item-remove" onClick={
                    (e)=> { e.stopPropagation();
                    onRemove(id)}}>
                    <span role='img' aria-label='delete'>❌</span>
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