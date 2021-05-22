import React from "react";
import "./ShowStories.css";

const ShowStories = () => {
  return (
    <div>
      <ol className="list-container">
        <li className="news-listing">
          <div className="news-title">
            <div>up icon</div>
            <h4>News in order</h4>
            <span>
              <small>(post location)</small>
            </span>
          </div>
          <small className="statistics">statistics</small>
        </li>
      </ol>
    </div>
  );
};

export default ShowStories;
