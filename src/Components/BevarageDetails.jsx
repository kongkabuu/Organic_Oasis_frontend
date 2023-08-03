import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BevarageList.css';
import { FaArrowLeft } from 'react-icons/fa';
import Loader from './Loader';


const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; // Updated API URL


const BevarageDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [bevarage, setBevarage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBevarageDetails() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`
          );
        const data = await response.json();
        console.log(data);

        if (data && data.drinks && data.drinks.length > 0) {
          const drink = data.drinks[0];
          const { strDrink, strDrinkThumb, strInstructions, strAlcoholic } = drink;
          const newBevarage = {
            title: strDrink,
            description: strInstructions || 'No description found',
            cover_img: strDrinkThumb,
            price: strAlcoholic || 'Non-Alcoholic', // Assuming price to be whether alcoholic or non-alcoholic
          };
          setBevarage(newBevarage);
        } else {
          setBevarage(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setBevarage(null);
      }
    }
    getBevarageDetails();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <section className='bevarage-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate('/beverage')}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>
        <div className='bevarage-details-content grid'>
          <div className='bevarage-details-img'>
            <img src={bevarage?.cover_img} alt='cover img' />
          </div>

          <div className='bevarage-details-info'>
            <div className='bevarage-details-item title'>
              <span className='fw-6 fs-24'>{bevarage?.title}</span>
            </div>
            <div className='bevarage-details-item description'>
              <span>{bevarage?.description}</span>
            </div>
            <div className='bevarage-details-item price'>
              <span className='fw-6 fs-24'>{bevarage?.price}</span>
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BevarageDetails;
