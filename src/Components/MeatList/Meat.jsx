import React from 'react';
import { Link } from 'react-router-dom';
import './MeatList.css';

const Meat = ({ title, price, cover_img }) => {
  return (
    <div className='meat-item flex flex-column flex-sb'>
      <div className='meat-item-img'>
        <img src={cover_img} alt='cover' />
      </div>
      <div className='meat-item-info text-center'>
        <div className='meat-item-info-item title fw-7 fs-18'>
          <span>{title}</span>
        </div>
        <div className='meat-item-info-item price fs-15'>
          <span className='text-capitalize fw-7'>Total Price: </span>
          <span>{price}</span>
        </div>
        <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Meat;
