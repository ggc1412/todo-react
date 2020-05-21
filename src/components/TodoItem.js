import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "../styles/TodoItem.module.scss";
import PropTypes from "prop-types";

const cn = classNames.bind(styles);

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, _) {
    const { item } = this.props;
    return item.checked !== nextProps.item.checked;
  }

  render() {
    const {
      item: { id, text, checked, color },
      onToggle,
      onRemove,
    } = this.props;
    return (
      <div className={cn("todoItem")} onClick={() => onToggle(id)}>
        <div
          className={cn("itemRemove")}
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          <span role="img" aria-label="delete">
            ❌
          </span>
        </div>
        <div className={cn("itemText", { checked }, { [color]: !checked })}>
          {text}
        </div>
        {checked && <div className={cn("itemCheck")}>✔</div>}
      </div>
    );
  }
}

// type 확인 기능. bug 잡기용
TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    checked: PropTypes.bool,
    color: PropTypes.string
  }),
  onToggle: PropTypes.func,
  onRemove: PropTypes.func
};

TodoItem.defaultProps = {
  item: {},
  onToggle: () => console.warn("onToggle is not defined."),
  onRemove: () => console.warn("onRemove is not defined.")
}

export default TodoItem;
