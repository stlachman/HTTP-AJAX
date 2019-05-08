import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = prop => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add-friend">Add Friend</NavLink></li>
        <li><NavLink to="/update-friend">Update Friend</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation;