import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const ProductContainer = styled.div`
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 15px;
  width: 343px;
  height: 298px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  height: 75%;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  font-size: 16px;
  background-color: #19C048;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;

 

`;

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    fetch(`https://organic-5ku0.onrender.com/products?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [category]);

  const handleAddToCart = (productId) => {
    fetch('https://organic-5ku0.onrender.com/order_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added to cart:', data);
        window.location.href = '/cart';
      })
      .catch((error) => console.error('Error adding to cart:', error));
  };

  return (
    <PageWrapper>
      <h1 style={{ color: '#19C048', textAlign: 'center' }}>{category} Products</h1>
      <ProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductImage src={product.image} alt={product.name} />
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>Price: ${product.price}</ProductPrice>
            </Link>
            <AddToCartButton onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </AddToCartButton>
          </ProductCard>
        ))}
      </ProductContainer>
    </PageWrapper>
  );
};



export default Products;


  
