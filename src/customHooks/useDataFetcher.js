import { useState, useEffect } from "react";
import { getStories } from "../utils/apicalls";

const useDataFetcher = (type) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStories(type)
      .then((fetchedStories) => {
        console.log(fetchedStories);
        setStories(fetchedStories);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type]);

  //console.log(stories);

  return { stories, loading };
};

export default useDataFetcher;
