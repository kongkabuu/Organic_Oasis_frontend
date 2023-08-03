import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import './BevarageList.css';
import Loader from './Loader';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; // Updated API URL


const Bevarage = ({ title, price, cover_img }) => {
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

  useEffect(() => {
    setLoading(true);
    async function fetchBevarageData() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`
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
