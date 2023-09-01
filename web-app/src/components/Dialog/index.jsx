import "./styles.scss";
import React from "react";

export default function Dialog(props) {
  const { open = false, onClose, title, content, action } = props;

  return (
    <>
      {open && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <div className="modal-content__title">{title}</div>
            <div className="modal-content__content">{content}</div>
            <div className="modal-content__action">{action}</div>
          </div>
        </div>
      )}
    </>
  );
}
