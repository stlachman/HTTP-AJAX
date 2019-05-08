import React from 'react';
import axios from 'axios';

import FriendList from './components/FriendList';
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			friends: []
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/friends`)
			.then((res) => this.setState({ friends: res.data }))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
        <FriendList friends={this.state.friends} />
			</div>
		);
	}
}

export default App;
