import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({form, children}) =>{
    return(
        <main className="todo-list-template">
            <section className="title">
                오늘의 할 일               
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