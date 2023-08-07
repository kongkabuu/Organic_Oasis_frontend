import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Dairy.css'; // Update the CSS file import
import Loader from './Loader';
import dairyProductData from './dairyProductData'; // Update the data import

const DairyDetails = () => { // Update component name
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [dairy, setDairy] = useState(null); // Update state and variables
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getDairyDetails() { // Update function name
      try {
        const newSelectedDairy = dairyProductData.find((item) => item.id === parseInt(id)); // Update data source
        setDairy(newSelectedDairy);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setDairy(null);
      }
    }
    getDairyDetails();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <section className='dairy-details'> {/* Update className */}
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate('/dairy')}> {/* Update className */}
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>
        <div className='dairy-details-content grid'> {/* Update className */}
          <div className='dairy-details-img'>
            <img src={dairy?.image} alt='dairy img' />
          </div>

          <div className='dairy-details-info'> {/* Update className */}
            <div className='dairy-details-item title'> {/* Update className */}
              <span className='fw-6 fs-24'>{dairy?.name}</span>
            </div>
            <div className='dairy-details-item description'> {/* Update className */}
              <span>{dairy?.description}</span>
            </div>
            <div className='dairy-details-item price'> {/* Update className */}
              <span className='fw-6 fs-24'>{dairy?.price}</span>
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DairyDetails; // Update component export
