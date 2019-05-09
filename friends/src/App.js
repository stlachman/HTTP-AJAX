import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import FriendList from './components/FriendList';
import Friend from './components/Friend';
import PostFriendForm from './components/PostFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';

import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			friends: [],
			activeFriend: null
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/friends`)
			.then((res) => {
				this.setState({ friends: res.data });
			})
			.catch((err) => console.log(err));
	}

	postFriend = (friend) => {
		axios
			.post(`http://localhost:5000/friends`, friend)
			.then((res) => {
				this.setState({ friends: res.data });
				this.props.history.push('/');
			})
			.catch((err) => console.log(err));
	};

	deleteFriend = (id) => {
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then((res) => {
				this.setState({
					friends: res.data
				});
				this.props.history.push(`/`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	updateFriend = (updatedFriend) => {
		axios
			.put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
			.then((res) => {
				this.setState({
					friends: res.data
				});
				this.props.history.push('/');
			})
			.catch((err) => console.log(err));
	};

	setUpdateForm = (friend) => {
		this.setState({ activeFriend: friend });
		this.props.history.push('/update-friend');
	};

	render() {
		return (
			<div>
				<Navigation />
				<Route
					exact
					path="/"
					render={(props) => (
						<FriendList
							{...props}
							getFriendById={this.getFriendById}
							friends={this.state.friends}
							deleteFriend={this.deleteFriend}
						/>
					)}
				/>
				<Route
					path="/add-friend"
					render={(props) => <PostFriendForm {...props} postFriend={this.postFriend}/>}
				/>
				<Route
					path="/update-friend"
					render={(props) => (
						<UpdateFriendForm
							{...props}
							activeFriend={this.state.activeFriend}
							updateFriend={this.updateFriend}
						/>
					)}
				/>
				<Route
					path="/friends/:id"
					render={(props) => (
						<Friend {...props} friend={this.state.activeFriend} setUpdateForm={this.setUpdateForm} />
					)}
				/>
			</div>
		);
	}
}

export default App;
