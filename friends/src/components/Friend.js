import React from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';

class Friend extends React.Component {
	state = {
		friend: null
	};

	componentDidMount() {
		axios
			.get(`http://localhost:5000/friendById/${this.props.match.params.id}`)
			.then((res) => this.setState({ friend: res.data }))
			.catch((err) => console.log(err));
	}

	updateForm = (e) => {
		e.preventDefault();
		this.props.setUpdateForm(this.state.friend);
	};

	render() {
		const { friend } = this.state;
		if (!friend) {
			return <h2>Loading friend data...</h2>;
		}

		return <FriendCard friend={friend} updateForm={this.updateForm} />;
	}
}

export default Friend;
