import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Beverage.css'; // Update the CSS file import
import Loader from './Loader';
import beverageProductData from './beverageProductData'; // Update the data import

const BeverageDetails = () => { // Rename the component
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [beverage, setBeverage] = useState(null); // Rename the state variable
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBeverageDetails() { // Rename the function
      try {
        // Check if the selected beverage is not found in the API data, use the hardcoded data
        const newSelectedBeverage = beverageProductData.find((item) => item.id === parseInt(id)); // Update the data source
        setBeverage(newSelectedBeverage);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setBeverage(null);
      }
    }
    getBeverageDetails();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <section className='beverage-details'> {/* Update className */}
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate('/beverage')}> {/* Update route */}
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>
        <div className='beverage-details-content grid'> {/* Update className */}
          <div className='beverage-details-img'> {/* Update className */}
            <img src={beverage?.image} alt='beverage img' /> {/* Update alt text */}
          </div>

          <div className='beverage-details-info'> {/* Update className */}
            <div className='beverage-details-item title'> {/* Update className */}
              <span className='fw-6 fs-24'>{beverage?.name}</span>
            </div>
            <div className='beverage-details-item description'> {/* Update className */}
              <span>{beverage?.description}</span>
            </div>
            <div className='beverage-details-item price'> {/* Update className */}
              <span className='fw-6 fs-24'>{beverage?.price}</span>
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeverageDetails; // Update component export
