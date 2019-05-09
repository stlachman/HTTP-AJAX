import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = styled.nav`
	background: #eee;
	width: 100%;
`;

const NavContainer = styled.ul`
	margin: 0 0 0 3rem;
	padding: 1.5rem 0;
	width: 100%;
`;

const NavList = styled.li`
	display: inline-block;
	margin: 0 2rem;

	&:first-of-type {
		margin-left: 0;
	}
`;

const NavElement = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
`;

const Navigation = () => {
	return (
		<NavBar>
			<NavContainer>
				<NavList>
					<NavElement to="/">Home</NavElement>
				</NavList>
				<NavList>
					<NavElement to="/add-friend">Add Friend</NavElement>
				</NavList>
			</NavContainer>
		</NavBar>
	);
};

export default Navigation;
