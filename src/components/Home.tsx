import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("order-summary")}>Place order</button>
    </div>
  );
};

export default Home;