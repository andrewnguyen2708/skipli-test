import React, { useState } from "react";
import "./styles.scss";
import { createArray } from "@/utils";

export default function Pagination(props) {
  const [activePage, setActivePage] = useState(1);
  const {
    totalPages = 5,
    onChangePage,
    totalRecords = 0,
    recordsPerPage = 0,
  } = props;
  const pages = createArray(totalPages);

  return (
    <div className="wrapper">
      <span>
        {recordsPerPage}/{totalRecords} records
      </span>
      <div className="pagination">
        <a
          onClick={() => {
            if (activePage === 1) return;
            setActivePage(activePage - 1);
            if (typeof onChangePage === "function") {
              onChangePage(activePage - 1);
            }
          }}
        >
          &laquo;
        </a>
        {pages.map((page) => (
          <a
            key={page}
            className={activePage === page ? "active" : ""}
            onClick={() => {
              setActivePage(page);
              if (typeof onChangePage === "function") {
                onChangePage(activePage - 1);
              }
            }}
          >
            {page}
          </a>
        ))}
        <a
          onClick={() => {
            if (activePage === totalPages) return;
            setActivePage(activePage + 1);
            if (typeof onChangePage === "function") {
              onChangePage(activePage - 1);
            }
          }}
        >
          &raquo;
        </a>
      </div>
    </div>
  );
}
