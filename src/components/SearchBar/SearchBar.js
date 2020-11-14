import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
	state = {
		searchVideo: "test",
	};

	// for input when it change
	onInputChange = (e) => {
		this.setState({ searchVideo: e.target.value });
	};

	// for form when user clicked or enter submit
	onFormSubmit = (e) => {
		e.preventDefault();

		console.log("submittted");

		// TODO: make sure we call the callback from the parent component
	};

	render() {
		return (
			<div className="searchBar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<input
							type="text"
							placeholder="Search Video"
							value={this.state.searchVideo}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
