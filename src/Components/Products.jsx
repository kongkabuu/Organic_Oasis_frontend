import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(`http://127.0.0.1:3000/products?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [category]);

  return (
    <div>
      <h1 style={{ color: '#19C048', textAlign: 'center' }}>{category} Products</h1>
      <ProductContainer>
        {products.map((product) => (

            <ProductCard key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </ProductCard>
        ))}
      </ProductContainer>
    </div>
  );
};

export default Products;
