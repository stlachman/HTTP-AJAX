import React from 'react';
import Friend from './Friend';

const FriendList = props => {
  return (
    <div>
      <h2>Friends List</h2>
      {props.friends.map(friend => <Friend key={friend.id} friend={friend} />)}
    </div>
  )
};

export default FriendList;