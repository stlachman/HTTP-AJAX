import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	background: #eee;
	max-width: 350px;
	margin: 2rem auto;
	padding: 2rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
`;

const CardText = styled.p`
  font-size: 1.5rem;
`;

const Button = styled.button`
	padding: 1rem 1.6rem;
	border-radius: 0.5rem;
  background: #743992;
  border: 0;
  color: #f9f9f9;
	font-size: 1.4rem;
	font-weight: bold;
	box-shadow: 3px 2px 2px 0px rgba(0, 0, 0, 0.3);
  margin-top: 1.5rem;
  
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const FriendCard = (props) => {
	return (
		<Card>
			<CardTitle>Name: {props.friend.name}</CardTitle>
			<CardText>Age: {props.friend.age}</CardText>
			<CardText>
				Email: <a href={`mailto:${props.friend.email}`}>{props.friend.email}</a>
			</CardText>
			<Button onClick={props.updateForm}>Update Friend</Button>
		</Card>
	);
};

export default FriendCard;
