import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Meat.css';
import Loader from './Loader';

const API_URL = 'http://127.0.0.1:3001/api/meat';

const MeatDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [meat, setMeat] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getMeatDetails() {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();

        if (data && data.length > 0) {
          const selectedMeat = data.find((item) => item.id === parseInt(id));
          setMeat(selectedMeat);
        } else {
          setMeat(null);
        }
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
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fetchMeatData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMeatData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setMeatData([]);
        setLoading(false);
      }
    }
    fetchMeatData();
  }, []);

  if (loading) return <Loader />;

  return (
    <section className='meatlist'>
      <div className='container'>
        <div className='section-title'>
          <h2>Meat Products</h2>
          <p>
            Below are our available meat products
          </p>
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

export { MeatDetails, MeatList };
