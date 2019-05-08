import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';

const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const FriendList = props => {
  return (
    <Container>
      <Title>Friends List</Title>
      {props.friends.map(friend => <Friend key={friend.id} friend={friend} />)}
    </Container>
  )
};

export default FriendList;