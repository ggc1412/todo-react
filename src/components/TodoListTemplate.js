import React from "react";
import classNames from "classnames/bind";
import styles from "../styles/TodoListTemplate.module.scss";

const cn = classNames.bind(styles);

const TodoListTemplate = ({ form, color, children }) => {
  return (
    <main className={cn("todoListTemplate")}>
      <section className={cn("title")}>오늘의 할 일</section>
      <section className={cn("colorWrapper")}>{color}</section>
      <section className={cn("formWrapper")}>{form}</section>
      <section className={cn("todosWrapper")}>{children}</section>
    </main>
  );
};

export default TodoListTemplate;
