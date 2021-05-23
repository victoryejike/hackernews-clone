import { useState, useEffect } from "react";
import { getStories } from "../utils/apicalls";

const useDataFetcher = (type) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories(type)
      .then((fetchedStories) => {
        console.log(fetchedStories);
        setStories(fetchedStories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type]);

  //console.log(stories);

  return { stories };
};

export default useDataFetcher;
