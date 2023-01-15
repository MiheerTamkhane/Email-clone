import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../index";
import {
  filterByFavorite,
  removeFromFavorite,
  getSingleEmail,
} from "../../features";
import { convetISOToDesiredString } from "../../utils";
import "./Canvas.css";

export const Canvas = () => {
  const dispatch = useDispatch();
  const { currentEmail, byFavorite } = useSelector((state) => state.allFilters);
  const { singleEmail, emailLoader } = useSelector((state) => state.allEmails);
  const time = new Date(currentEmail?.date).toISOString();

  useEffect(() => {
    dispatch(getSingleEmail(currentEmail.id));
  }, [currentEmail.id]);
  return (
    <div className="canvas">
      <div>
        <div className="canvas-avatar">
          {currentEmail?.from.email[0].toUpperCase()}
        </div>
      </div>
      <div className="canvas-body">
        <div className="canvas-head">
          <div className="canvas-subject">
            <h2>{currentEmail.subject}</h2>
            <span>{convetISOToDesiredString(time)}</span>
          </div>
          <div>
            {byFavorite.includes(currentEmail.id) ? (
              <button
                className="fav-btn"
                onClick={() => dispatch(removeFromFavorite(currentEmail.id))}
              >
                Remove
              </button>
            ) : (
              <button
                className="fav-btn"
                onClick={() => dispatch(filterByFavorite(currentEmail.id))}
              >
                Mark as favorite
              </button>
            )}
          </div>
        </div>
        {emailLoader ? (
          <Loader />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: singleEmail?.body }} />
        )}
      </div>
    </div>
  );
};
