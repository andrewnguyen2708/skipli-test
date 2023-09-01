import * as React from "react";
import "./styles.scss";

export default function IconButton(props) {
  const { color, fontSize, onClick } = props;
  return (
    <span
      className={`icon-button icon-button-${color}`}
      style={{ fontSize: fontSize }}
      onClick={onClick}
    >
      {props.children}
    </span>
  );
}
