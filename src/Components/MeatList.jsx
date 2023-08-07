import React, { useState, useEffect } from 'react';
import './Meat.css';
import Loader from './Loader';
import newProductData from './newProductData';

const Meat = ({ name, price, image, id }) => {
  return (
    <div className='meat-item flex flex-column flex-sb'>
      <div className='meat-item-img'>
        <img src={image} alt='meat' />
      </div>
      <div className='meat-item-info text-center'>
        <div className='meat-item-info-item title fw-7 fs-18'>
          <span>{name}</span>
        </div>
        <div className='meat-item-info-item price fs-15'>
          <span className='text-capitalize fw-7'>Price: </span>
          <span>{price}</span>
        </div>
        <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

const MeatList = () => {
  const [meatData, setMeatData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const mergedData = [...newProductData]; // Use the hardcoded data
      setMeatData(mergedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setMeatData([]);
      setLoading(false);
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <section className='meatlist'>
      <div className='container'>
        <div className='section-title'>
          <h2>Meat Products</h2>
          <p>Below are our available meat products</p>
        </div>
        <div className='meatlist-content grid'>
          {meatData.map((item) => (
            <Meat key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default (Meat ,MeatList);
