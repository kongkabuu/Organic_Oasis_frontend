import React from 'react';
import { Link } from 'react-router-dom';
import './BevarageList.css';

const Bevarage = ({ title, price, cover_img }) => {
  return (
    <div className='bevarage-item flex flex-column flex-sb'>
      <div className='bevarage-item-img'>
        <img src={cover_img} alt='cover' />
      </div>
      <div className='bevarage -item-info text-center'>
        <div className='bevarage-item-info-item title fw-7 fs-18'>
          <span>{title}</span>
        </div>
        <div className='bevarage-item-info-item price fs-15'>
          <span className='text-capitalize fw-7'>Total Price: </span>
          <span>{price}</span>
        </div>
        <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Bevarage;
