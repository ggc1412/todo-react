import React from "react";
import styles from "./TodoListTemplate.module.css";

const TodoListTemplate = ({form, color, children}) =>{
    return(
        <main className={styles.todoListTemplate}>
            <section className={styles.title}>
                오늘의 할 일               
            </section>
            <section className={styles.colorWrapper}>
                {color}
            </section>
            <section className={styles.formWrapper}>
                {form}
            </section>
            <section className={styles.todosWrapper}>
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;