import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEmails } from "../../features";
import "./Pagination.css";

export const Pagination = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const pages = [1, 2];
  //   const { itemsCount, pageSize, currentPage } = props;
  //   const pagesCount = Math.ceil(itemsCount / pageSize);
  useEffect(() => {
    dispatch(getAllEmails(page));
  }, [page]);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((pageNo) => (
          <li key={pageNo}>
            <button
              className={page === pageNo ? "page-btn active" : "page-btn"}
              onClick={() => setPage(pageNo)}
            >
              {pageNo}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
