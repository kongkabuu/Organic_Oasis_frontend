import React from 'react';
import Meat from '../Meat/Meat'; // Update the import path
import './MeatList.css';

const MeatList = () => {
  const meatData = [
    {
      id: 1,
      title: 'Beef',
      price: '$10.99',
      cover_img: 'https://via.placeholder.com/180', // Placeholder image URL
    },
    {
      id: 2,
      title: 'Chicken',
      price: '$8.99',
      cover_img: 'https://i.pinimg.com/564x/fd/13/69/fd13698867e26a123d1bb5150436306f.jpg', // Placeholder image URL
    },
    {
      id: 3,
      title: 'Fish',
      price: '$12.99',
      cover_img: 'https://via.placeholder.com/180', // Placeholder image URL
    },
  ];

  return (
    <section className='meatlist'>
      <div className='container'>
        <div className='section-title'>
          <h2>Meat Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem.
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

export default MeatList;
