import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./TodoItem.module.css";

const cn = classNames.bind(styles);

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, _){
        const { item } = this.props;
        return item.checked !== nextProps.item.checked
    }

    render(){
        const { item:{id, text, checked, color}, onToggle, onRemove } = this.props;
        return(
            <div className={cn('todoItem')} onClick={()=>onToggle(id)}>
                <div className={cn('itemRemove')} onClick={
                    (e)=> { e.stopPropagation();
                    onRemove(id)}}>
                    <span role='img' aria-label='delete'>❌</span>
                </div>
                <div className={cn('itemText', { checked }, {[color]: !checked})}>
                    {text}
                </div>
        { checked && <div className={cn('itemCheck')}>✔</div> }
            </div>
        )
    }
}

export default TodoItem;