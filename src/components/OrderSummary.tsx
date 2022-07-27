import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';


const OrderSummary = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div>
      Order Summary
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
};

export default OrderSummary;