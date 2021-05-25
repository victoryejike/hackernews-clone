import React, { useState } from "react";
import "./ShowStories.css";

import useDataFetcher from "../../customHooks/useDataFetcher";

const ShowStories = ({ type }) => {
  const { stories, loading } = useDataFetcher(type);
  //const [storyList, setStoryList] = useState([]);
  console.log(stories);
  // for(let story of stories){
  //   settoryList = story.data
  // }

  return (
    <div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        stories.map((story, i) => (
          <div key={i} className="list-container">
            <div className="news-listing">
              <div className="news-title">
                <div>{i + 1}</div>
                <h4>
                  <a href={story.data.url}>{story.data.title}</a>
                </h4>
                <span>
                  <small>
                    <a href={story.data.url}>({story.data.url})</a>
                  </small>
                </span>
              </div>
              <div>
                <small className="statistics">
                  <span>{story.data.score} points</span>
                  <span>by {story.data.by}</span> I
                  {story.data.time ? (
                    <span>
                      {new Date(story.data.time).toLocaleTimeString()}
                    </span>
                  ) : (
                    <span>{story.data.time}</span>
                  )}
                  I <span>{story.data.descendants} points</span>
                </small>
              </div>
            </div>
          </div>
        ))
      )}
      {/* <p>
        <a href="#/">More</a>
      </p> */}
    </div>
  );
};

export default ShowStories;
