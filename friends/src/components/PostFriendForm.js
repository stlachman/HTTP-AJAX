import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
	max-width: 500px;
	margin: 3rem auto;
	text-align: center;
`;

const Form = styled.form`display: inline-block;`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-top: 0;
`;

const FormInput = styled.input`
	display: block;
	margin-top: 1.8rem;
  border: 0;
  padding: 1rem 0.5rem;
  border-bottom: 0.25rem solid #191919;
  color: #191919;
  font-size: 1.5rem;
  transition: 0.25s border cubic-bezier(0.79, 0.07, 0.42, 0.91);

  &:focus {
    outline: none;
    border-bottom: 0.25rem solid #464646;
  }
`;

const Button = styled.button`
	padding: 1rem 1.6rem;
	border-radius: 0.5rem;
	background: #eee;
	font-size: 1.4rem;
	font-weight: bold;
	box-shadow: 3px 2px 2px 0px rgba(0, 0, 0, 0.3);
  margin-top: 1.5rem;
  
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;


class PostFriendForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			friend: {
				name: '',
				age: '',
				email: ''
			}
		};
	}

	handleInputChange = (event) => {
		event.persist();

		let value = event.target.value;
		if (event.target.value === 'age') {
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
	  this.props.postFriend(this.state.friend);
		this.setState({
			friend: {
				name: '',
				age: '',
				email: ''
			}
		});
	};

	render() {
		return (
			<FormContainer>
				<FormTitle>Add New Friend</FormTitle>
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
						type="number"
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
					<Button type="submit">Add Friend</Button>
				</Form>
			</FormContainer>
		);
	}
}

export default PostFriendForm;
