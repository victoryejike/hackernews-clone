import { useState, useEffect } from "react";
import { getStories } from "../utils/apicalls";

const useDataFetcher = (type) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories(type)
      .then((stories) => {
        setStories(stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type]);

  return stories;
};

export default useDataFetcher;
