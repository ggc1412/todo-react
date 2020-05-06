import React, { Component } from "react";

class TodoItem extends Component {
    render(){
        const { input } = this.props.item;
        console.log(this.props.item);
        return(
            <div>
                {input}
            </div>
        )
    }
}

export default TodoItem;