import React from "react";
import "./ShowStories.css";

import useDataFetcher from "../../customHooks/useDataFetcher";

const ShowStories = ({ match }) => {
  const { type } = match.params;
  const { stories } = useDataFetcher(type);
  console.log(type);

  console.log(stories);

  return (
    <div></div>
    // {
    //   stories.map((story, i)=>(
    //   <div key={i}>
    //     <ol className="list-container">
    //       <li className="news-listing">
    //         <div className="news-title">
    //           <div>up icon</div>
    //           <h4>{story.title}</h4>
    //           <span>
    //             <small>(post location)</small>
    //           </span>
    //         </div>
    //         <small className="statistics">statistics</small>
    //       </li>
    //     </ol>
    //   </div>
    //   ))
    // }
  );
};

export default ShowStories;
