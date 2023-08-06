import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Dairy.css';
import Loader from './Loader';


const API_URL = 'http://127.0.0.1:3001/api/dairy';


const DairyDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [dairy, setDairy] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getDairyDetails() {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();

        if (data && data.length > 0) {
          const selectedDairy = data.find((item) => item.id === parseInt(id));
          setDairy(selectedDairy);
        } else {
          setDairy(null);
        }
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
    <section className='dairy-details'> {/* Update class name */}
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate('/dairy')}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>
        <div className='dairy-details-content grid'> {/* Update class name */}
          <div className='dairy-details-img'> {/* Update class name */}
            <img src={dairy?.image} alt='dairy img' /> {/* Update alt text */}
          </div>

          <div className='dairy-details-info'> {/* Update class name */}
            <div className='dairy-details-item title'> {/* Update class name */}
              <span className='fw-6 fs-24'>{dairy?.name}</span> {/* Update class name */}
            </div>
            <div className='dairy-details-item description'> {/* Update class name */}
              <span>{dairy?.description}</span> {/* Update class name */}
            </div>
            <div className='dairy-details-item price'> {/* Update class name */}
              <span className='fw-6 fs-24'>{dairy?.price}</span> {/* Update class name */}
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Rename the component from Meat to Dairy
const Dairy = ({ name, price, image, id }) => {
  return (
    <div className='dairy-item flex flex-column flex-sb'> {/* Update class name */}
      <div className='dairy-item-img'> {/* Update class name */}
        <img src={image} alt='dairy' /> {/* Update alt text */}
      </div>
      <div className='dairy-item-info text-center'> {/* Update class name */}
        <div className='dairy-item-info-item title fw-7 fs-18'> {/* Update class name */}
          <span>{name}</span>
        </div>
        <div className='dairy-item-info-item price fs-15'> {/* Update class name */}
          <span className='text-capitalize fw-7'>Price: </span>
          <span>{price}</span>
        </div>
        <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

// Rename the component from MeatList to DairyList
const DairyList = () => {
  const [dairyData, setDairyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fetchDairyData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setDairyData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setDairyData([]);
        setLoading(false);
      }
    }
    fetchDairyData();
  }, []);

  if (loading) return <Loader />;

  return (
    <section className='dairylist'>
      <div className='container'>
        <div className='section-title'>
          <h2>Dairy Products</h2>
          <p>
            Below are our available dairy products
          </p>
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

export default { DairyDetails, DairyList };
