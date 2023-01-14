import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByStatus, addCurrentEmailToCanvas } from "../../features";
import { convetISOToDesiredString } from "../../utils";
import "./Card.css";

export const Card = ({ email }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.allFilters);
  const time = new Date(email.date).toISOString();

  return (
    <div
      className={`card-container ${
        filter.byStatus.includes(email.id) ? "bg-read" : ""
      }`}
      onClick={() => {
        dispatch(addCurrentEmailToCanvas(email));
        dispatch(filterByStatus(email.id));
      }}
    >
      <div>
        <div className="card-avatar">{email.from.email[0].toUpperCase()}</div>
      </div>
      <div className="card-body">
        <p>
          From:{" "}
          <b>
            {" "}
            {email.from.email.split("@")[0]} {"<"}
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
