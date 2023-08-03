import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BevarageList.css';
import { FaArrowLeft } from 'react-icons/fa';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; // Updated API URL

const Loading = () => {
  return <div>Loading...</div>;
};

const BevarageDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [bevarage, setBevarage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBevarageDetails() {
      try {
        const response = await fetch(`${URL}${id}`);
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

  if (loading) return <Loading />;

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

  if (loading) return <Loading />;

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
