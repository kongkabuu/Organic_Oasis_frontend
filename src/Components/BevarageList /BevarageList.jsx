import React from 'react';
import Bevarage from '../Bevarage/Bevarage'; // Update the import path
import './BevarageList.css';

const BevarageList = () => {
  const bevarageData = [
    {
      id: 1,
      title: 'Juice',
      price: '$10.99',
      cover_img: 'https://via.placeholder.com/180', // Placeholder image URL
    },
    {
      id: 2,
      title: 'Water',
      price: '$8.99',
      cover_img: 'https://i.pinimg.com/564x/fd/13/69/fd13698867e26a123d1bb5150436306f.jpg', // Placeholder image URL
    },
    {
      id: 3,
      title: 'Wine',
      price: '$12.99',
      cover_img: 'https://via.placeholder.com/180', // Placeholder image URL
    },
  ];

  return (
    <section className='bevaragelist'>
      <div className='container'>
        <div className='section-title'>
          <h2>Bevarage Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
        </div>
        <div className='bevaragelist-content grid'>
          {bevarageData.map((item) => (
            <Bevarage key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BevarageList;
