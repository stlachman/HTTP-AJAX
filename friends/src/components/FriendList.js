import React from 'react';
import styled from 'styled-components';
import UpdateFriendForm from './UpdateFriendForm';

const Container = styled.div`
	max-width: 1200px;
	margin: 4rem auto 0;
	text-align: center;
`;

const Title = styled.h1`font-size: 3rem;`;
const SubTitle = styled.h2`
	font-size: 1.6rem;
	transition: 0.2s opacity ease-in-out;
	&:hover {
		cursor: pointer;
		opacity: 0.6;
	}
`;

const FriendList = (props) => {
	function routeToItem(ev, friend) {
		ev.preventDefault();
		props.history.push(`/friends/${friend.id}`);
	}
	return (
		<Container>
			<Title>Friends List</Title>
			{props.friends.map((friend) => (
				<div>
					<SubTitle onClick={(ev) => routeToItem(ev, friend)}>Name: {friend.name}</SubTitle>
					<p>Age: {friend.age}</p>
					<p>
						Email: <a href={`mailto:${friend.email}`}>{friend.email}</a>
					</p>
					<button onClick={() => props.deleteFriend(friend.id)}>Delete Friend</button>
				</div>
			))}
		</Container>
	);
};

export default FriendList;
