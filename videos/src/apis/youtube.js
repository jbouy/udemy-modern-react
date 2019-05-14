import axios from "axios";

const KEY = "AIzaSyBuREJRY0j9lsRH6vR3Y4i_xHp-2MUvBXQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
