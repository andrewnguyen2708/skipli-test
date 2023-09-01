import * as React from "react";
import "./styles.scss";

export default function Tooltip(props) {
  return (
    <div className="tooltip">
      {props.children}
      <span className="tooltiptext" style={{ width: props.width }}>
        {props.title}
      </span>
    </div>
  );
}
