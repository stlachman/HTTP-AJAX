import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #eee;
  max-width: 350px;
  margin: 2rem auto;
  padding: 2rem;
`;

const Friend = props => {
  return (
    <Card>
      <h2>Name: {props.friend.name}</h2>
      <p>Age: {props.friend.age}</p>
      <p>Email: <a href={`mailto:${props.friend.email}`}>{props.friend.email}</a></p>
      <button onClick={() => props.deleteFriend(props.friend.id)}>Delete Friend</button>
    </Card>
  )
};


export default Friend;