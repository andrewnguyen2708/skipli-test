import React from "react";
import "./styles.scss";

export default function TextField(props) {
  return <input className="textfield" type="text" {...props} />;
}
