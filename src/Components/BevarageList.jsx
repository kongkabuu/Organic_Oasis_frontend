import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import './BevarageList.css';
import Loader from './Loader';

const URL = 'http://127.0.0.1:3002/products'; // Updated API URL


const Bevarage = ({ title, price, cover_img ,id}) => {
  if (loading) return <Loader />;
  return (
    <div className='bevarage-item flex flex-column flex-sb'>
      <div className='bevarage-item-img'>
        <img src={cover_img} alt='cover' />
      </div>
      <div className='bevarage-item-info text-center'>
        <div className='bevarage-item-info-item title fw-7 fs-18'>
          <span>{title}</span>
        </div>
        <div className='bevarage-item-info-item price fs-15'>
          <span className='text-capitalize fw-7'>Total Price: </span>
          <span>{price}</span>
        </div>
        <button className='add-to-cart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

const BevarageList = ({ categoryName }) => {
  const [bevarageData, setBevarageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log(bevarageData)

  useEffect(() => {
    setLoading(true);
    async function fetchBevarageData() {
      try {
        const response = await fetch(
          `http://127.0.0.1:3002/products/${categoryName}`
        );
        const data = await response.json();
        console.log(data);
        setBevarageData(data.drinks || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setBevarageData([]);
        setLoading(false);
      }
    }
    fetchBevarageData();
  }, [categoryName]);

  if (loading) return <Loader />;

  return (
    <section className="bevaragelist">
      <div className='container'>
        <div className='section-title'>
          <h2>Beverage Products</h2>
          <p>
            Below are our available products
          </p>
        </div>
        <div className='bevaragelist-content grid'>
          {bevarageData.map((item) => (
            <Bevarage key={item.idDrink} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BevarageList ;
