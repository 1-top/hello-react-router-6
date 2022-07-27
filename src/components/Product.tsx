import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <div>
        <input type="search" name="" id="" placeholder="Search products" />
      </div>
      <nav>
        <NavLink to="featured">FEATURED</NavLink>
        <NavLink to="new">NEW</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Product;