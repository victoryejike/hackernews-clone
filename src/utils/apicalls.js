import axios from "axios";
import { axiosInstance } from "./axios-config";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${axiosInstance}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log(error, "cannot load stories");
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${axiosInstance}/${type}stories.json`
    );
    //console.log(storyIds);
    const stories = await Promise.all(
      storyIds.slice(0, 20).map((storyId) => getStory(storyId))
    );
    console.log(stories);
    return stories;
  } catch (error) {
    console.log(error, "An Error occurred, try again in 5secs");
  }
};
