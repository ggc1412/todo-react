import React from "react";
import classNames from "classnames/bind";
import styles from "../styles/Pallete.module.scss";
import PropTypes from "prop-types";
import { List } from "immutable";

const cn = classNames.bind(styles);

const Color = ({ onSetColor, color: { id, text, selected } }) => {
  return (
    <div
      className={cn("color", text, { selected })}
      onClick={() => onSetColor(id)}
    />
  );
};

const Pallete = ({ colors, onSetColor }) => {
  const colorPallete = colors.map((color, idx) => (
    <Color key={idx} onSetColor={onSetColor} color={color.toJS()} />
  ));

  return <>{colorPallete}</>;
};

Pallete.prototype = {
  colors: PropTypes.instanceOf(List),
  onSetColor: PropTypes.func,
};

Pallete.defaultProps = {
  colors: [],
  onSetColor: () => console.warn("onSetColor is not defined."),
};

export default Pallete;
