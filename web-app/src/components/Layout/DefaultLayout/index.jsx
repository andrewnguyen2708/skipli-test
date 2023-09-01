import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <SideMenu />
      <div className={cx("content")}>
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}
