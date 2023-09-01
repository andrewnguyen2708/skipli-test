import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Button(props) {
  const {
    color = "primary",
    children,
    onClick,
    variant = "contained",
    disabled,
  } = props;
  return (
    <button
      className={cx(`${cx("btn")} btn-${variant}-${!disabled && color} btn-${disabled}`)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
