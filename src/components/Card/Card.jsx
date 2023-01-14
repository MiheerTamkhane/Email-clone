import React from "react";
import "./Card.css";

export const Card = () => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src="" alt="" className="card-img" />
      </div>
      <div className="card-body">
        <p>
          From: <b>Sarang@gmail.com</b>
        </p>
        <p>
          Subject: <b>asach kahitari</b>
        </p>
        <p className="desc">description</p>
        <div className="date-and-fav-container">
          <span>Date</span>
          <span>Favorite</span>
        </div>
      </div>
    </div>
  );
};
