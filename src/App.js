import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

export default class App extends Component {
	render() {
		return (
			<div className="main__container ui container">
				<SearchBar />
			</div>
		);
	}
}
