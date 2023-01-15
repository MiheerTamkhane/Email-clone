import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByStatus,
  addCurrentEmailToCanvas,
  getSingleEmail,
} from "../../features";
import { convetISOToDesiredString } from "../../utils";
import "./Card.css";

export const Card = ({ email }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.allFilters);
  const time = new Date(email.date).toISOString();

  useEffect(() => {
    localStorage.setItem("by_status", JSON.stringify(filter.byStatus));
    localStorage.setItem("current_email", JSON.stringify(filter.currentEmail));
    localStorage.setItem("by_favorite", JSON.stringify(filter.byFavorite));
    localStorage.setItem("filter_status", JSON.stringify(filter.filterStatus));
  }, [filter]);
  return (
    <div
      className={`card-container ${
        filter.byStatus?.includes(email.id) ? "bg-read" : ""
      }
      ${filter.currentEmail?.id === email.id ? "card-border" : ""}
      `}
      onClick={() => {
        dispatch(addCurrentEmailToCanvas(email));
        dispatch(getSingleEmail(email.id));
        dispatch(filterByStatus(email.id));
      }}
    >
      <div>
        <div className="card-avatar">{email.from.name[0].toUpperCase()}</div>
      </div>
      <div className="card-body">
        <p>
          From:{" "}
          <b>
            {" "}
            {email.from.name} {"<"}
            {email.from.email}
            {">"}
          </b>
        </p>
        <p>
          Subject: <b>{email.subject}</b>
        </p>
        <p className="desc">{email.short_description}</p>
        <div className="date-and-fav-container">
          <span>{convetISOToDesiredString(time)}</span>

          {filter.byFavorite.includes(email.id) && (
            <span className="fav">Favorite</span>
          )}
        </div>
      </div>
    </div>
  );
};
