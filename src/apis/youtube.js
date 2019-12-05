import axios from "axios";

const KEY = "AIzaSyB6ulCJPhZbFbyE0HgVA9cdJPjSnexT8GM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
