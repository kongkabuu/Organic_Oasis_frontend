import React, { useState, useEffect } from 'react';
import './Dairy.css'; // Update the CSS file import
import Loader from './Loader';
import dairyProductData from './dairyProductData'; // Update the data import

const Dairy = ({ name, price, image, id }) => { // Update component name
  return (
    <div className='dairy-item flex flex-column flex-sb'> {/* Update className */}
      <div className='dairy-item-img'>
        <img src={image} alt='dairy' />
      </div>
      <div className='dairy-item-info text-center'>
        <div className='dairy-item-info-item title fw-7 fs-18'> {/* Update className */}
          <span>{name}</span>
        </div>
        <div className='dairy-item-info-item price fs-15'> {/* Update className */}
          <span className='text-capitalize fw-7'>Price: </span>
          <span>{price}</span>
        </div>
        <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

const DairyList = () => { // Update component name
  const [dairyData, setDairyData] = useState([]); // Update state and variables
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const mergedData = [...dairyProductData]; // Update data source
      setDairyData(mergedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setDairyData([]);
      setLoading(false);
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <section className='dairylist'> {/* Update className */}
      <div className='container'>
        <div className='section-title'>
          <h2>Dairy Products</h2> {/* Update title */}
          <p>Below are our available dairy products</p>
        </div>
        <div className='dairylist-content grid'>
          {dairyData.map((item) => (
            <Dairy key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default (Dairy , DairyList);
