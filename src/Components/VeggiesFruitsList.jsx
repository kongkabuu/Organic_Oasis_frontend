import React, { useState, useEffect } from 'react';
import './VeggiesFruits.css'; // Update the CSS file import
import Loader from './Loader';
import veggiesFruitsProductData from './veggiesFruitsProductData'; // Update the data import

const VeggiesFruits = ({ name, price, image, id }) => {
  return (
    <div className='veggies-fruits-item flex flex-column flex-sb'>
      <div className='veggies-fruits-item-img'>
        <img src={image} alt='veggies and fruits' />
      </div>
      <div className='veggies-fruits-item-info text-center'>
        <div className='veggies-fruits-item-info-item title fw-7 fs-18'>
          <span>{name}</span>
        </div>
        <div className='veggies-fruits-item-info-item price fs-15'>
          <span className='text-capitalize fw-7'>Price: </span>
          <span>{price}</span>
        </div>
        <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

const VeggiesFruitsList = () => {
  const [veggiesFruitsData, setVeggiesFruitsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const mergedData = [...veggiesFruitsProductData]; // Update data source
      setVeggiesFruitsData(mergedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setVeggiesFruitsData([]);
      setLoading(false);
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <section className='veggies-fruits-list'> {/* Update className */}
      <div className='container'>
        <div className='section-title'>
          <h2>Veggies and Fruits Products</h2> {/* Update title */}
          <p>Below are our available veggies and fruits products</p> {/* Update description */}
        </div>
        <div className='veggies-fruits-list-content grid'> {/* Update className */}
          {veggiesFruitsData.map((item) => (
            <VeggiesFruitsItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default (VeggiesFruits ,VeggiesFruitsList); // Update component export
