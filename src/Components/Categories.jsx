import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Categories = () => {
  const categoriesData = [
    { name: 'Meat', emoji: '🥩' },
    { name: 'Beverage', emoji: '🍹' },
    { name: 'Bakery', emoji: '🍞' },
    { name: 'Vegetables', emoji: '🥬' },
    { name: 'Cereals', emoji: '🍚' },
    { name: 'Species', emoji: '🧂' },
    { name: 'Dairy', emoji: '🧀' },
  ];

  const Circle = styled.div`
    width: 2cm;
    height: 2cm;
    background-color: white;
    border-radius: 50%;
    margin: 75px;
    border: 2px solid black;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem; /* Adjust the font size as needed */
    line-height: 1.5rem; /* Adjust the line height to match the font size */
  `;

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;

  const CategoryName = styled.div`
    font-weight: bold;
    margin-top: -1.5cm;
    margin-left: 2.5cm;
  `;
  return (
    <div>
      <h1 style={{ color: '#19C048', textAlign: 'center' }}>Categories</h1>
      <Container>
        {categoriesData.map((category) => (
          <Link key={category.name} to={`/${category.name.toLowerCase()}`}>
            <div>
              <Circle>{category.emoji}</Circle>
              <CategoryName>{category.name}</CategoryName>
            </div>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default Categories;
