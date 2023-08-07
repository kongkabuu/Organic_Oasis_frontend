import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Meat.css';
import Loader from './Loader';
import newProductData from './newProductData';

const MeatDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [meat, setMeat] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getMeatDetails() {
      try {
        // Check if the selected meat is not found in the API data, use the hardcoded data
        const newSelectedMeat = newProductData.find((item) => item.id === parseInt(id));
        setMeat(newSelectedMeat);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setMeat(null);
      }
    }
    getMeatDetails();
  }, [id]);

  if (loading) return <Loader />;



  return (
    <section className='meat-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate('/meat')}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>
        <div className='meat-details-content grid'>
          <div className='meat-details-img'>
            <img src={meat?.image} alt='meat img' />
          </div>

          <div className='meat-details-info'>
            <div className='meat-details-item title'>
              <span className='fw-6 fs-24'>{meat?.name}</span>
            </div>
            <div className='meat-details-item description'>
              <span>{meat?.description}</span>
            </div>
            <div className='meat-details-item price'>
              <span className='fw-6 fs-24'>{meat?.price}</span>
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeatDetails;
