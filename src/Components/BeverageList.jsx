import React, { useState, useEffect } from 'react';
import './Beverage.css'; // Update the CSS file import
import Loader from './Loader';
import beverageProductData from './beverageProductData'; // Update the data import

const Beverage = ({ name, price, image, id }) => {
  return (
    <div className='beverage-item flex flex-column flex-sb'>
      <div className='beverage-item-img'>
        <img src={image} alt='beverage' />
      </div>
      <div className='beverage-item-info text-center'>
        <div className='beverage-item-info-item title fw-7 fs-18'>
          <span>{name}</span>
        </div>
        <div className='beverage-item-info-item price fs-15'>
          <span className='text-capitalize fw-7'>Price: </span>
          <span>{price}</span>
        </div>
        <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

const BeverageList = () => {
  const [beverageData, setBeverageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const mergedData = [...beverageProductData]; // Update data source
      setBeverageData(mergedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setBeverageData([]);
      setLoading(false);
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <section className='beveragelist'> {/* Update className */}
      <div className='container'>
        <div className='section-title'>
          <h2>Beverage Products</h2> {/* Update title */}
          <p>Below are our available beverage products</p> {/* Update description */}
        </div>
        <div className='beveragelist-content grid'> {/* Update className */}
          {beverageData.map((item) => (
            <Beverage key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default (Beverage , BeverageList); // Update component export
