import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/*<Link to="/">Home</Link>*/}
      {/*<Link to="/about">about</Link>*/}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};

export default Navbar;