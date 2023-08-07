import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './VeggiesFruits.css'; // Update the CSS file import
import Loader from './Loader';
import veggiesFruitsProductData from './veggiesFruitsProductData'; // Update the data import

const VeggiesFruitsDetails = () => { // Rename the component
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [veggiesFruits, setVeggiesFruits] = useState(null); // Rename the state variable
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getVeggiesFruitsDetails() { // Rename the function
      try {
        // Check if the selected veggies and fruits is not found in the API data, use the hardcoded data
        const newSelectedVeggiesFruits = veggiesFruitsProductData.find((item) => item.id === parseInt(id)); // Update the data source
        setVeggiesFruits(newSelectedVeggiesFruits);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setVeggiesFruits(null);
      }
    }
    getVeggiesFruitsDetails();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <section className='veggies-fruits-details'> {/* Update className */}
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate('/veggies-fruits')}> {/* Update route */}
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>
        <div className='veggies-fruits-details-content grid'> {/* Update className */}
          <div className='veggies-fruits-details-img'> {/* Update className */}
            <img src={veggiesFruits?.image} alt='veggies and fruits img' /> {/* Update alt text */}
          </div>

          <div className='veggies-fruits-details-info'> {/* Update className */}
            <div className='veggies-fruits-details-item title'> {/* Update className */}
              <span className='fw-6 fs-24'>{veggiesFruits?.name}</span>
            </div>
            <div className='veggies-fruits-details-item description'> {/* Update className */}
              <span>{veggiesFruits?.description}</span>
            </div>
            <div className='veggies-fruits-details-item price'> {/* Update className */}
              <span className='fw-6 fs-24'>{veggiesFruits?.price}</span>
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeggiesFruitsDetails; // Update component export
