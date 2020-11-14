import axios from "axios";

const KEY = "AIzaSyAJ2SkOQWZ-m3qCY6vWpvBqPvc92UlMgg4";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
