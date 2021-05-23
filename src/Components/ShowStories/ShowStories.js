import React, { useState } from "react";
import "./ShowStories.css";

import useDataFetcher from "../../customHooks/useDataFetcher";

const ShowStories = ({ match }) => {
  const { type } = match.params;
  const { stories } = useDataFetcher(type);
  //const [storyList, setStoryList] = useState([]);

  console.log(stories);
  // for(let story of stories){
  //   settoryList = story.data
  // }

  return (
    <div>
      {stories.map((story, i) => (
        <div key={i} className="list-container">
          <div className="news-listing">
            <div className="news-title">
              <div>{i + 1}</div>
              <h4>
                <a href={story.data.url}>{story.data.title}</a>
              </h4>
              <span>
                <small>(post location)</small>
              </span>
            </div>
            <small className="statistics">statistics</small>
          </div>
        </div>
      ))}
      <p>
        <a href="#/">More</a>
      </p>
    </div>
  );
};

export default ShowStories;
