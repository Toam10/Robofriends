import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroller from "../Components/Scroller";
import "../Styles/App.css";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobotsReducer.searchField,

		isPending: state.requestRobotsReducer.isPending,
		robots: state.requestRobotsReducer.robots,
		error: state.requestRobotsReducer.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	};
};

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots } = this.props;
		const filteredRobots = robots.filter((profile) => {
			const { name } = profile;
			return name.toLowerCase().includes(searchField.toLowerCase());
		});
		if (!robots.length) {
			return (
				<div className='loaderContainer'>
					<h1>Loding</h1>
					<div className='loader'></div>
				</div>
			);
		} else {
			return (
				<div className='App'>
					<h1
						style={{
							margin: "0px",
							marginBottom: "0.2em",
						}}
					>
						RoboFriends
					</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroller>
						<div className='cardListContainerApp'>
							<CardList robotsProfiles={filteredRobots} />
						</div>
					</Scroller>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
