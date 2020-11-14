import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./apis/youtube";

export default class App extends Component {
	state = {
		videos: [],
	};

	onVideoSearchSubmit = async (searchVideo) => {
		const response = await youtube.get("/search", {
			params: {
				q: searchVideo,
			},
		});

		this.setState({ videos: response.data.items });
	};

	render() {
		// const { videos } = this.state;

		return (
			<div className="main__container ui container">
				<SearchBar onFormSubmit={this.onVideoSearchSubmit} />
				<p>Video Length: {this.state.videos.length} videos</p>
			</div>
		);
	}
}
