import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroller from "../Components/Scroller";
import "../Styles/App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robotsProfiles: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((respones) => respones.json())
			.then((robotsProfiles) => this.setState({ robotsProfiles }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { robotsProfiles, searchField } = this.state;
		const filteredRobots = robotsProfiles.filter((profile) => {
			const { name } = profile;
			return name.toLowerCase().includes(searchField.toLowerCase());
		});
		if (!robotsProfiles.length) {
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
					<SearchBox searchChange={this.onSearchChange} />
					<Scroller>
						<div className="cardListContainerApp" >
							<CardList robotsProfiles={filteredRobots} />
						</div>
					</Scroller>
				</div>
			);
		}
	}
}

export default App;
