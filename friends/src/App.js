import React from 'react';
import axios from 'axios';
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
				<h2>Hello</h2>
        {this.state.friends.map(friend => <p key={friend.id}>{friend.name}</p>)}
			</div>
		);
	}
}

export default App;
