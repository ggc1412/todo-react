import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({form, color, children}) =>{
    return(
        <main className="todo-list-template">
            <section className="title">
                오늘의 할 일               
            </section>
            <section className="color-wrapper">
                {color}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;