import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Button from "@/components/Button";

const cx = classNames.bind(styles);

export default function SideMenu() {
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>Skipli Project</h4>
      <Button>All Post</Button>
    </div>
  );
}
