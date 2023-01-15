import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { sortByFilterStatus } from "../../features";
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.allFilters);
  return (
    <div className="filter-container">
      <span>Filter By:</span>
      <button
        className={`${filter?.filterStatus === "BY_UNREAD" && "active"}`}
        onClick={() => dispatch(sortByFilterStatus("BY_UNREAD"))}
      >
        Unread
      </button>
      <button
        className={`${
          (filter?.filterStatus === "BY_READ" && "active") ||
          (filter?.byStatus?.length === 0 && "fade")
        }`}
        onClick={() => {
          if (filter?.byStatus.length > 0) {
            dispatch(sortByFilterStatus("BY_READ"));
          }
        }}
      >
        Read
      </button>
      <button
        className={`${
          (filter?.filterStatus === "BY_FAVORITE" && "active") ||
          (filter?.byFavorite.length === 0 && "fade")
        }`}
        onClick={() => {
          if (filter?.byFavorite.length > 0) {
            dispatch(sortByFilterStatus("BY_FAVORITE"));
          }
        }}
      >
        Favorite
      </button>
    </div>
  );
};
