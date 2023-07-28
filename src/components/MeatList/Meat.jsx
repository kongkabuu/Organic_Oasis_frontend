import React from 'react';
import { Link } from 'react-router-dom';
import "./MeatList.css";

const Meat = (meat) => {
  return (
    <div className='meat-item flex flex-column flex-sb'>
      <div className='meat-item-img'>
        <img src = {meat.cover_img} alt = "cover" />
      </div>
      <div className='meat-item-info text-center'>
        <Link to = {`/meat/${meat.id}`} {...meat}>
          <div className='meat-item-info-item title fw-7 fs-18'>
            <span>{meat.title}</span>
          </div>
        </Link>

        <div className='meat-item-info-item price fs-15'>
          <span className='text-capitalize fw-7'>Total Price: </span>
          <span>{meat.price}</span>
        </div>

        </div>
    </div>
 )
}

export default Meat
