import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Card = styled.div`
	background: #eee;
	max-width: 350px;
	margin: 2rem auto;
	padding: 2rem;
`;

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

		return (
			<Card>
				<h2>Name: {friend.name}</h2>
				<p>Age: {friend.age}</p>
				<p>
					Email: <a href={`mailto:${friend.email}`}>{friend.email}</a>
				</p>
				<button onClick={this.updateForm}>Update Friend</button>
			</Card>
		);
	}
}

export default Friend;
