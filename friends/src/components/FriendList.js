import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
	max-width: 1200px;
	margin: 4rem auto 0;
	text-align: center;
`;

const Title = styled.h1`font-size: 3.5rem;`;
const SubTitle = styled.h2`
	font-size: 1.6rem;
`;

const FriendItem = styled.div`
  background: #F5F5F5;
  max-width: 400px;
  margin: 1.5rem auto 0;
  padding: 2rem 1rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
`;

const Button = styled.button`
  padding: 1rem 1.6rem;
  border: 0;
	border-radius: 0.5rem;
	background: #eee;
	font-size: 1.4rem;
	font-weight: bold;
	box-shadow: 3px 2px 2px 0px rgba(0, 0, 0, 0.3);
  margin: 1.5rem 2rem 0;
  transition: 0.2s all ease-in;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Button)`
  background: #F6546A;
  color: #f9f9f9;
`;


const FriendList = (props) => {
	function routeToItem(event, friend) {
		event.preventDefault();
		props.history.push(`/friends/${friend.id}`);
	}
	return (
		<Container>
			<Title>Friends List</Title>
			{props.friends.map((friend) => (
				<FriendItem key={friend.id}>
					<SubTitle>Name: {friend.name}</SubTitle>
					<Text>Age: {friend.age}</Text>
					<Text>
						Email: <a href={`mailto:${friend.email}`}>{friend.email}</a>
					</Text>
          <Button onClick={(event) => routeToItem(event, friend)}>View Friend</Button>
					<DeleteButton onClick={() => props.deleteFriend(friend.id)}>Delete Friend</DeleteButton>
				</FriendItem>
			))}
		</Container>
	);
};

export default FriendList;
