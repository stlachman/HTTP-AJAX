import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import FriendList from './components/FriendList';
import PostFriendForm from './components/PostFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';

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
  
  postFriend = (friend) => {
    axios.post(`http://localhost:5000/friends`, friend)
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err))
  }

  editFriend = (friend) => {
    axios.put(`http://localhost:5000/friends/1`, friend)
    .then(res => this.setState({ friends: res.data}))
    .catch(err => console.log(err))
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({
        friends: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

	render() {
		return (
			<div>
        <Navigation />
        <Route exact path="/" render={(props) => <FriendList {...props} friends={this.state.friends} deleteFriend={this.deleteFriend}/>}/>        
        <Route path="/add" render={(props) => <PostFriendForm postFriend={this.postFriend} />}/>
        <Route path="/update" render={(props) => <UpdateFriendForm editFriend={this.editFriend} />}/>
			</div>
		);
	}
}

export default App;
