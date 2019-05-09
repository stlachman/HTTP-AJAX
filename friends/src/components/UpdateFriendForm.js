import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
	max-width: 500px;
	margin: 0 auto;
	text-align: center;
`;

const Form = styled.form`display: inline-block;`;

const FormInput = styled.input`
	display: block;
	margin-top: 1.8rem;
`;

const FormButton = styled.button`margin-top: 1.5rem;`;

class UpdateFriendForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			friend: this.props.activeFriend
		};
	}

	handleInputChange = (event) => {
		event.persist();
		let value = event.target.value;
		if (event.target.name === ' age') {
			value = parseInt(value, 10);
		}
		this.setState((prevState) => ({
			friend: {
				...prevState.friend,
				[event.target.name]: value
			}
		}));
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.updateFriend(this.state.friend);
	};

	render() {
		console.log(this.props);
		return (
			<FormContainer>
				<h2>Update a friend</h2>
				<Form onSubmit={this.handleSubmit}>
					<FormInput
						onChange={this.handleInputChange}
						value={this.state.friend.name}
						type="text"
						name="name"
						placeholder="Add Name"
					/>
					<FormInput
						onChange={this.handleInputChange}
						value={this.state.friend.age}
						type="text"
						name="age"
						placeholder="Add Age"
					/>
					<FormInput
						onChange={this.handleInputChange}
						value={this.state.friend.email}
						type="text"
						name="email"
						placeholder="Add Email"
					/>
					<FormButton type="submit">Update Friend</FormButton>
				</Form>
			</FormContainer>
		);
	}
}

export default UpdateFriendForm;
