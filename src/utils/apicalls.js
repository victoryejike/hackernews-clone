import axios from "axios";
//import { axiosInstance } from "./axios-config";

//console.log(axiosInstance.baseURL);

const getStory = async (id) => {
  try {
    const story = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    return story;
  } catch (error) {
    console.log(error, "cannot load stories");
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `https://hacker-news.firebaseio.com/v0/${type}stories.json`
    );
    //console.log(storyIds);
    const storiesList = await Promise.all(
      storyIds.slice(0, 20).map((storyId) => getStory(storyId))
    );
    //console.log(storiesList);
    return storiesList;
  } catch (error) {
    console.log(error, "An Error occurred, try again in 5secs");
  }
};
