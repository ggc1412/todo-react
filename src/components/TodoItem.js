import React, { Component } from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, _){
        const { item } = this.props;
        return item.checked !== nextProps.item.checked
    }

    render(){
        const { item:{id, text, checked, color}, onToggle, onRemove } = this.props;
        return(
            <div className={styles.todoItem} onClick={()=>onToggle(id)}>
                <div className={styles.itemRemove} onClick={
                    (e)=> { e.stopPropagation();
                    onRemove(id)}}>
                    <span role='img' aria-label='delete'>❌</span>
                </div>
                <div className={`${styles.itemText} ${ checked ? styles.checked : styles[color] }`}>
                    {text}
                </div>
        { checked && <div className={styles.itemCheck}>✔</div> }
            </div>
        )
    }
}

export default TodoItem;