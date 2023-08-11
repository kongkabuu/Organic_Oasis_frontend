import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProductImage = styled.img`
  max-width: 300px;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductSeller = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <ProductDetailsWrapper>
      <ProductImage src={`http://localhost:3000${product.image.url}`} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.desc}</ProductDescription>
      <ProductPrice>Price: ${product.price}</ProductPrice>
      <ProductSeller>Seller: {product.user_id}</ProductSeller>
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
